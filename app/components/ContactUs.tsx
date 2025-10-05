export default function ContactUs() {
  return (
<section id="contact-us" className="scroll-mt-24 w-full bg-white">
  <div className="container mx-auto max-w-7xl px-4 py-16">
    <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <p className="text-gray-700">
          Email: <a className="underline" href="mailto:info@proratortransport.ca">info@proratortransport.ca</a>
        </p>
        <p className="text-gray-700 mt-2">
          Phone: <a className="underline" href="tel:+1-555-000-0000">+1 (555) 000-0000</a>
        </p>
        <p className="text-gray-600 mt-4">
          Hours: Mon–Fri, 8:00–18:00 (ET)
        </p>
      </div>
      <div className="rounded-2xl border p-4 bg-gray-50">
        <p className="text-gray-600">Contact form coming soon.</p>
      </div>
    </div>
  </div>
</section>
  );
}

