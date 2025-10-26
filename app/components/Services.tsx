export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 relative w-full min-h-screen flex items-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/img/mercedes-sprinter-on-warehouse.jpg')",
      }}
    >
      <div className="relative container mx-auto max-w-7xl px-4 pt-10 pb-18">
        <h2 className="text-5xl text-center font-bold mb-6 text-white">
          Our Services
        </h2>
        <p className="text-white text-center font-bold text-2xl">
          We provide reliable and time-sensitive transportation solutions across
          Canada and the United States.
        </p>
        <p className="text-white text-center text-2xl font-bold">
          Our experienced team ensures that every delivery arrives safely,
          efficiently, and on schedule — no matter the distance or urgency.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-white text-center font-bold">
              Cross-Border Delivery
            </h3>
            <p className="text-white text-center font-bold text-xl">
              Seamless transportation between Canada and the U.S. We handle
              customs documentation and ensure smooth, compliant deliveries for
              all types of cargo.
              <br /> ACE, ACI, ATA CARNET
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-white text-center font-bold">
              Emergency &amp; Hot-Shot
            </h3>
            <p className="text-white text-center font-bold text-xl">
              Time-critical delivery when every minute counts. Perfect for
              parts, equipment, or high-priority materials requiring same-day or
              next-day delivery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-white text-center font-bold">
              Local &amp; Domestic
            </h3>
            <p className="text-white text-center font-bold text-xl">
              Reliable delivery solutions across provinces or within your city.
              We support residential, commercial, and industrial clients with
              flexible logistics options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
