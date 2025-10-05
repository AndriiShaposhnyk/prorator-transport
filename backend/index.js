const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

let quotes = [];

app.get("/health", (req, res) => {
    res.json({ ok: true, ts: Date.now() });
});

app.post("/api/quotes", (req, res) => {
    const { name, email, phone, pickup, dropoff, date, payloadKg, notes } = req.body || {};

    if (!name || !email || !pickup || !dropoff) {
        return res.status(400).json({ error: "name, email, pickup, dropoff - required" });
    }

    const id = Date.now().toString(36);
    const item = { id, name, email, phone, pickup, dropoff, date, payloadKg, notes, createAt: new Date().toISOString(), status: "PENDING"};

    quotes.push(item);

    res.status(201).json({ ok: true, id }); 

})

app.get("/api/quotes", (req, res) => {
    res.json(quotes);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("API listening on", PORT));
