"use client";
import QuoteForm from "./QuoteForm";
export default function Quote() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 container mx-auto max-w-3xl px-4 py-12 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Get a Quote</h2>
      <p className="text-gray-600 text-2xl mb-6">
        Leave a transportation request and we&apos;ll get back to you with details
        and pricing.
      </p>
      <QuoteForm />
    </section>
  );
}
