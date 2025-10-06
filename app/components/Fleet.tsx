export default function Fleet() {
  return (
    <section
      id="fleet"
      className="scroll-mt-24 relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/two-ford-transits.jpg')" }}
    >
      <div className="container mx-auto max-w-7xl px-4 py-16 rounded-2xl bg-white/3 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
        <h2 className="text-5xl font-bold mb-6 text-center">Our Fleet</h2>
        <p className="text-black text-center font-bold text-2xl">
          Our fleet is made up of long wheelbase cargo vans — reliable,
          efficient, and perfect for time-critical deliveries. Each vehicle is
          fully insured, GPS-equipped, and regularly maintained to ensure top
          performance on every route. Our vans are ideal for expedited,
          cross-border, and regional transport across Canada and the United
          States. Whether it&apos;s same-day or next-day delivery,{" "}
          <strong className="text-gray-900 font-semibold italic">
            Prorator Transport Inc.
          </strong>{" "}
          ensures every load arrives safely and on time.
        </p>
      </div>
    </section>
  );
}
