// backend/index.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
require("dotenv").config(); // читає backend/.env

const app = express();

// Безпека + JSON
app.use(helmet());
app.use(express.json({ limit: "1mb" }));

// CORS (dev 3000/3001)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// Пам'ять для заявок (тимчасово)
let quotes = [];

// Nodemailer (SMTP з .env)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,         // mail.srv18.swhc.ca
  port: Number(process.env.SMTP_PORT), // 465
  secure: String(process.env.SMTP_SECURE).toLowerCase() !== "false",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls: { servername: "srv18.swhc.ca" },  // <-- важливо для SNI
});


// Перевіримо SMTP при старті (для діагностики)
transporter
  .verify()
  .then(() => console.log("✅ SMTP connection verified"))
  .catch((e) => console.error("❌ SMTP verify failed:", e.message));

// Health
app.get("/health", (_req, res) => res.json({ ok: true, ts: Date.now() }));

// Прийом заявки Get a Quote
app.post("/api/quotes", async (req, res) => {
  try {
    const b = req.body || {};
    const {
      name,
      email,
      phone,
      pickup,
      dropoff,
      pickupDate,   // нове поле
      dropoffDate,  // нове поле
      payloadLbs,   // у фунтах
      notes,
    } = b;

    // Мінімальна валідація
    if (!name || !email || !pickup || !dropoff) {
      return res
        .status(400)
        .json({ error: "name, email, pickup, dropoff - required" });
    }

    const id = Date.now().toString(36);
    const item = {
      id,
      name,
      email,
      phone: phone || null,
      pickup,
      dropoff,
      pickupDate: pickupDate || null,
      dropoffDate: dropoffDate || null,
      payloadLbs:
        payloadLbs === null || payloadLbs === undefined || payloadLbs === ""
          ? null
          : Number(payloadLbs),
      notes: notes || "",
      createdAt: new Date().toISOString(),
      status: "PENDING",
    };

    quotes.push(item);

    // Лист на пошту
    const html = `
      <h2>New Quote Request</h2>
      <p><b>ID:</b> ${item.id}</p>
      <p><b>Name:</b> ${escapeHtml(item.name)}</p>
      <p><b>Email:</b> ${escapeHtml(item.email)}</p>
      <p><b>Phone:</b> ${escapeHtml(item.phone || "-")}</p>
      <p><b>Pickup:</b> ${escapeHtml(item.pickup)}</p>
      <p><b>Dropoff:</b> ${escapeHtml(item.dropoff)}</p>
      <p><b>Pickup date/time:</b> ${escapeHtml(item.pickupDate || "-")}</p>
      <p><b>Dropoff date/time:</b> ${escapeHtml(item.dropoffDate || "-")}</p>
      <p><b>Payload (lbs):</b> ${item.payloadLbs ?? "-"}</p>
      <p><b>Notes:</b><br>${escapeHtml(item.notes).replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: `"Prorator Transport Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Quote Request (ID: ${item.id})`,
      html,
    });

    console.log(`✅ Email sent for quote ID ${item.id}`);
    return res.status(201).json({ ok: true, id: item.id });
  } catch (err) {
    console.error("❌ /api/quotes error:", err.message);
    return res.status(500).json({ error: "Email send failed" });
  }
});

// Список заявок (тимчасово)
app.get("/api/quotes", (_req, res) => res.json(quotes));

// ---- helpers ----
function escapeHtml(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("🚀 API listening on port", PORT));


app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, message - required" });
    }

    const id = Date.now().toString(36);
    const html = `
      <h2>New Contact Message</h2>
      <p><b>ID:</b> ${id}</p>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Message:</b><br>${escapeHtml(message).replace(/\n/g,"<br>")}</p>
    `;

    await transporter.sendMail({
      from: `"Prorator Transport Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message (ID: ${id})`,
      html,
    });

    res.json({ ok: true, id });
  } catch (e) {
    console.error("❌ /api/contact error:", e.message);
    res.status(500).json({ error: "Email send failed" });
  }
});
