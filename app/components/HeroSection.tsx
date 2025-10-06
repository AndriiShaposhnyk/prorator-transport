export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-end justify-center pb-12"
      style={{ backgroundImage: "url('/img/mercedes-sprinter-on-road.jpg')" }}
    >

      {/* Контент поверх картинки */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Prorator Transport Inc.</h1>
        <p className="text-2xl font-medium italic">
           Canada - USA Cross-Border • Local & Domestic Delivery
        </p>
        <br></br>
        <h2 className="text-3xl font-bold mb-4">Reliable Logistics Solutions Across United States and Canada</h2>
      </div>
    </section>
  );
}