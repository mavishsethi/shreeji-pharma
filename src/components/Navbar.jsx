import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="flex items-center justify-between px-5 md:px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
            alt="logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />

          <div>
            <h1 className="text-lg md:text-2xl font-bold text-blue-900">
              ShreeJi Pharmaceuticals
            </h1>

            <p className="text-xs md:text-sm text-gray-500">
              Trusted Healthcare Partner
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-700 transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-700 transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("products")}
            className="hover:text-blue-700 transition"
          >
            Products
          </button>

          <button
            onClick={() => scrollToSection("directors")}
            className="hover:text-blue-700 transition"
          >
            Directors
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-700 transition"
          >
            Contact
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen
              ? <X size={30} className="text-blue-900" />
              : <Menu size={30} className="text-blue-900" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="md:hidden flex flex-col gap-5 px-5 pb-5 text-gray-700 font-medium bg-white">

            <button
              onClick={() => scrollToSection("home")}
              className="text-left hover:text-blue-700"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-blue-700"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="text-left hover:text-blue-700"
            >
              Products
            </button>

            <button
              onClick={() => scrollToSection("directors")}
              className="text-left hover:text-blue-700"
            >
              Directors
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-blue-700"
            >
              Contact
            </button>

          </div>
        )
      }
    </nav>
  );
}

export default Navbar;