export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-24 relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/img/road.jpg')" }}>
      <div className="container mx-auto max-w-7xl px-4 py-16 rounded-2xl bg-white/3 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
        <h2 className="text-5xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-center text-white font-bold text-2xl leading-relaxed">
          <strong className="text-black text-2xl font-semibold italic">
            Prorator Transport Inc.
          </strong>{" "}
          has been providing reliable and time-critical delivery services across
          Canada and the United States. What started as a small local operation
          has grown into a trusted logistics partner known for professionalism,
          punctuality, and personal attention to every client.
          <br />
          <br />
          We specialize in cross-border and expedited transport using modern
          long-wheelbase vans, perfectly suited for fast and secure delivery of
          all types of cargo. Our team takes pride in combining experience,
          precision, and care — ensuring every delivery arrives safely, on
          schedule, and with the level of service our customers have relied on
          for decades.
        </p>
      </div>
    </section>
  );
}
