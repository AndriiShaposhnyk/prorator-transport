"use client";

import { useState, FormEvent } from "react";
export default function QuoteForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        date: "",
        payloadKg: "",
        notes: "",
    });

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        try {
            const res = await fetch ("http://localhost:4000/api/quotes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    pickup: form.pickup, 
                    dropoff: form.dropoff,
                    date: form.date, 
                    payloadKg: form.payloadKg ? Number (form.payloadKg) : null,
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
                date: "",
                payloadKg: "",
                notes: "",
            });
        } catch (err: any) {
            alert (err?.message || "Submission failed. Please try again.");
        }
        
        
    }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
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
        type="datetime"
        placeholder="Pickup date and time"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        className="w-full border p-2 rounded"
        type="number"
        placeholder="Payload (kg)"
        value={form.payloadKg}
        onChange={(e) => setForm({ ...form, payloadKg: e.target.value })}
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Notes"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-600 text-white py-2 hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );

}