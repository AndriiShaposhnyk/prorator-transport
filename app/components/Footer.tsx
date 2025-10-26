export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=43.589045%2C-79.644120&z=10&output=embed&hl=en&gl=CA"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mississauga, Ontario on map"
          />
        </div>

        <p>
          &copy; {new Date().getFullYear()} Prorator Transport. All rights reserved.
        </p>
      </div>
    </footer>
  );
}



