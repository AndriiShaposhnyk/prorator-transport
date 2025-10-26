"use client";

import { useState, FormEvent } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again later.");
    }
  }

  return (
    <section
      id="contact-us"
      className="scroll-mt-24 w-full min-h-screen flex flex-col justify-center items-center bg-white px-4 py-16"
    >
      {/* Заголовок */}
      <h2 className="text-5xl font-bold mb-8 text-center">Contact Us</h2>

      {/* Форма по центру */}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4 text-left"
      >
        <input
          className="w-full border p-2 rounded"
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Your Email *"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="w-full border p-2 rounded min-h-[120px]"
          placeholder="Your Message *"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full rounded bg-black text-white font-bold py-2 border border-black cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
        )}
      </form>

      {/* Контактна інформація під формою */}
      <div className="text-center mt-12 text-black space-y-2 font-bold text-xl">
        <p>
          Email:{" "}
          <a className="underline" href="mailto:info@proratortransport.ca">
            info@proratortransport.ca
          </a>
        </p>
        <p>
          Phone:{" "}
          <a className="underline" href="tel:+1-555-000-0000">
            +1 (647) 615-9291
          </a>
        </p>
        <p>Location: Mississauga, Ontario</p>
      </div>
    </section>
  );
}

