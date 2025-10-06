export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 flex justify-center pt-20">
        {/* Навігація */}
        <nav className="flex space-x-8 mt-8 text-white text-lg font-semibold">
          <a
            href="#home"
            className="text-3xl hover:text-black transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-3xl hover:text-black transition-colors"
          >
            Services
          </a>
          <a
            href="#fleet"
            className="text-3xl hover:text-black transition-colors"
          >
            Fleet
          </a>
          <a
            href="#about"
            className="text-3xl hover:text-black transition-colors"
          >
            About Us
          </a>
          <a
            href="#quote"
            className="text-3xl hover:text-black transition-colors"
          >
            Get a Quote
          </a>
          <a
            href="#apply"
            className="text-3xl hover:text-black transition-colors"
          >
            Apply as owner-operator
          </a>
          <a
            href="#contact-us"
            className="text-3xl hover:text-black transition-colors"
          >
            Contact
          </a>
        </nav>
    </header>
  );
}
