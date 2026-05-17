function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-5 md:px-10 py-12 md:py-16">

        {/* Company Info */}
        <div>

          <div className="flex items-center gap-3">

            <img
              src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
              alt="logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                ShreeJi Pharmaceuticals
              </h1>

              <p className="text-xs md:text-sm text-blue-200">
                Trusted Healthcare Partner
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-300 leading-7 text-sm md:text-base">
            Delivering quality pharmaceutical solutions with
            trust, innovation, and excellence for better healthcare.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-lg md:text-xl font-semibold mb-5">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base">

            <button className="hover:text-white text-left transition">
              Home
            </button>

            <button className="hover:text-white text-left transition">
              About
            </button>

            <button className="hover:text-white text-left transition">
              Products
            </button>

            <button className="hover:text-white text-left transition">
              Directors
            </button>

            <button className="hover:text-white text-left transition">
              Contact
            </button>

          </div>
        </div>

        {/* Contact Info */}
        <div>

          <h2 className="text-lg md:text-xl font-semibold mb-5">
            Contact Info
          </h2>

          <div className="space-y-4 text-gray-300 text-sm md:text-base">

            <p className="break-words">
              📍 Punjab, India
            </p>

            <p>
              📞 +91 79737 37001
            </p>

            <p className="break-words">
              ✉️ shreejipharmaceuticalsmkt@gmail.com
            </p>

          </div>

        </div>

        {/* Directors */}
        <div>

          <h2 className="text-lg md:text-xl font-semibold mb-5">
            Directors
          </h2>

          <div className="space-y-4 text-gray-300 text-sm md:text-base">

            <p>
              Mr. Prabhal Sethi
            </p>

            <p>
              Mr. Maheep Wadhwa
            </p>

            <p>
              Dedicated to trusted pharmaceutical excellence.
            </p>

          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800 py-5 px-5 text-center text-gray-400 text-sm md:text-base">

        © 2026 ShreeJi Pharmaceuticals. All Rights Reserved.

      </div>
    </footer>
  );
}

export default Footer;