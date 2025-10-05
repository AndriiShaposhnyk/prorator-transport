
export default function Services() {
  return (
<section id="services" className="scroll-mt-24 w-full bg-white">
  <div className="container mx-auto max-w-7xl px-4 py-16">
    <h2 className="text-3xl text-center font-bold mb-6">Our Services</h2>
    <p className="text-gray-600 text-center text-2xl">We provide reliable and time-sensitive transportation solutions across
          Canada and the United States.</p>
           <p className="text-gray-600 text-center text-2xl">Our experienced team ensures that every delivery arrives safely,
          efficiently, and on schedule — no matter the distance or urgency.</p>

          <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">Cross-Border Delivery</h3>
            <p className="text-gray-600 text-center">
              Seamless transportation between Canada and the U.S. We handle customs documentation and
              ensure smooth, compliant deliveries for all types of cargo.
            </p>
          </div>

           <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">Emergency &amp; Hot-Shot</h3>
            <p className="text-gray-600 text-center">
              Time-critical delivery when every minute counts. Perfect for parts, equipment, or
              high-priority materials requiring same-day or next-day delivery.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">Local &amp; Domestic</h3>
            <p className="text-gray-600 text-center">
              Reliable delivery solutions across provinces or within your city.
              We support residential, commercial, and industrial clients with flexible logistics options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}