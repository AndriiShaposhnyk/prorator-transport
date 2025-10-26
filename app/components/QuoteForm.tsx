"use client";

import { useState, FormEvent } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    pickupDate: "",   
    dropoffDate: "",  
    payloadLbs: "",   
    notes: "",
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          pickup: form.pickup,
          dropoff: form.dropoff,
          pickupDate: form.pickupDate || null,
          dropoffDate: form.dropoffDate || null,
          payloadLbs:
            form.payloadLbs.trim() === "" ? null : Number(form.payloadLbs),
          notes: form.notes,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Failed to submit");
      }

      const data = await res.json();
      alert("Quote submitted ID: " + data.id);

      setForm({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        pickupDate: "",
        dropoffDate: "",
        payloadLbs: "",
        notes: "",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Submission failed. Please try again.";
      alert(message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left max-w-md mx-auto">
      <input
        className="w-full border p-2 rounded"
        placeholder="Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Email *"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Pickup address *"
        value={form.pickup}
        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
        required
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Dropoff address *"
        value={form.dropoff}
        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
        required
      />

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Pickup date and time"
        value={form.pickupDate}
        onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
      />

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Dropoff date and time"
        value={form.dropoffDate}
        onChange={(e) => setForm({ ...form, dropoffDate: e.target.value })}
      />

      <input
        className="w-full border p-2 rounded"
        type="number"
        placeholder="Payload (lbs)"
        value={form.payloadLbs}
        onChange={(e) => setForm({ ...form, payloadLbs: e.target.value })}
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Notes"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
      />

      <button
        type="submit"
        className="w-full rounded bg-black text-white font-bold py-2 transition hover:bg-white hover:text-black cursor-pointer border border-black"
      >
        Submit
      </button>
    </form>
  );
}

