export default function OwnerOperator() {
  return (
<section id="apply" className="scroll-mt-24 w-full bg-gray-50">
  <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
    <h2 className="text-3xl font-bold mb-4 text-center">Apply as Owner-Operator</h2>
    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
      Although <strong className="text-gray-900 font-semibold italic">Prorator Transport Inc.</strong>{" "}
      operates its own fleet of modern long-wheelbase vehicles, we also welcome independent 
  Owner-Operators to join our growing network. We’re looking for reliable professionals 
  for cross-border and regional routes — offering competitive rates,<br></br> on-time payments, 
  and 24/7 dispatch support.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {[
        "Cross-border loads (US↔CA)",
        "Weekly settlements",
        "24/7 dispatch & support",
        "Fuel surcharge program",
        "Consistent lanes",
        "Safety-first culture",
      ].map((b) => (
        <div key={b} className="rounded-2xl border bg-white p-4 text-gray-800">
          {b}
        </div>
      ))}
    </div>

    {/* CTA-кнопки */}
    <div className="flex justify-center">
      <a
        href="mailto:hr@proratortransport.ca?subject=Owner-Operator%20Application&body=Name:%0D%0ATruck%20type:%0D%0AExperience%20(years):%0D%0ARoutes%20preferred:%0D%0A"
        className="inline-block px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:opacity-90"
      >
        Apply via Email
      </a>
    </div>
  </div>
</section>
  );
}
