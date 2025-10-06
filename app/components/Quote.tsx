"use client";

import Image from "next/image";
import QuoteForm from "./QuoteForm";

export default function Quote() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 w-full min-h-screen flex flex-col md:flex-row"
    >
{/* Ліва частина — лого по центру */}
<div className="w-full md:w-1/2 flex justify-center items-center bg-white">
  <Image
    src="/img/prorator-logo-right.jpeg"
    alt="Prorator Transport Logo"
    width={1000}    
    height={300}
    className="object-contain"
    priority
  />
</div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 py-12 text-center">
        <div className="max-w-2xl mb-12">
          <h2 className="text-5xl font-bold mb-4">Get a Quote</h2>
          <p className="text-black text-2xl">
            Leave a transportation request and we&apos;ll get back to you <br></br> as soon as possible 
            with details and pricing.
          </p>
        </div>

        {/* Форма */}
        <div className="w-full max-w-lg">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
