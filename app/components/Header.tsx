import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex flex-col items-center px-6 py-4">
        {/* Лого */}
        <div className="mb-6">
          <Image
            src="/ProratorLogoRight.jpeg"
            alt="Prorator Transport Logo"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>

        {/* Навігація */}
        <nav className="flex space-x-8 mt-8">
          <a
            href="#home"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#fleet"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            Fleet
          </a>
          <a
            href="#about"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="#quote"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            Get a Quote
          </a>
          <a
            href="#apply"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            Apply as owner-operator
          </a>
          <a
            href="#contact"
            className="text-2xl font-bold text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
