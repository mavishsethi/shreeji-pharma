function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <img
          src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
          alt="logo"
          className="w-12 h-12"
        />

        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            ShreeJi Pharmaceuticals
          </h1>

          <p className="text-sm text-gray-500">
            Trusted Healthcare Partner
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 text-gray-700 font-medium">

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
    </nav>
  );
}

export default Navbar;