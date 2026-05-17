import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="grid md:grid-cols-2 items-center px-5 md:px-10 py-14 md:py-20 gap-10 md:gap-14 bg-gradient-to-r from-blue-50 to-cyan-50"
      >

        {/* Left Content */}
        <div>

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Welcome To ShreeJi Pharmaceuticals
          </p>

          <h1 className="text-6xl font-bold leading-tight text-blue-950 mt-5">
            Advancing Healthcare For A Better Tomorrow
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-7 md:leading-8">
            ShreeJi Pharmaceuticals is committed to delivering
            high-quality pharmaceutical and healthcare solutions
            with innovation, trust, and excellence.
          </p>

          <div className="flex gap-5 mt-10">

            {/* <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
              Explore Products
            </button>

            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
              Contact Us
            </button> */}

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611193.jpg"
            alt="medical"
            className="rounded-3xl shadow-2xl w-full max-w-xl"
          />

        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-5 md:px-10 py-14 md:py-20 bg-white">

        <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-md">
          <h1 className="text-5xl font-bold text-blue-800">
            1+
          </h1>

          <p className="mt-4 text-gray-600 font-medium">
            Years Experience
          </p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-md">
          <h1 className="text-5xl font-bold text-blue-800">
            3+
          </h1>

          <p className="mt-4 text-gray-600 font-medium">
            Healthcare Products
          </p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-md">
          <h1 className="text-5xl font-bold text-blue-800">
            100+
          </h1>

          <p className="mt-4 text-gray-600 font-medium">
            Happy Clients
          </p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-md">
          <h1 className="text-5xl font-bold text-blue-800">
            24/7
          </h1>

          <p className="mt-4 text-gray-600 font-medium">
            Support Service
          </p>
        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
       className="grid md:grid-cols-2 items-center px-5 md:px-10 py-16 md:py-24 gap-10 md:gap-14 bg-gray-50"
      >

        {/* Image */}
        <div>

          <img
            src="https://img.freepik.com/free-photo/medical-researcher-working-laboratory_23-2148847852.jpg"
            alt="about"
            className="rounded-3xl shadow-xl"
          />

        </div>

        {/* Content */}
        <div>

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mt-5 leading-tight">
            Delivering Trusted Pharmaceutical Excellence
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            At ShreeJi Pharmaceuticals, we focus on providing
            trusted and innovative healthcare products that meet
            global standards of quality and safety.
          </p>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Our mission is to improve lives through reliable
            pharmaceutical solutions while maintaining excellence,
            integrity, and customer satisfaction.
          </p>

          {/* <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
            Learn More
          </button> */}

        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"

        className="px-5 md:px-10 py-16 md:py-24 bg-white"
      >

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Our Products
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mt-5">
            Pharmaceutical Categories
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We provide a wide range of high-quality pharmaceutical
            products designed to support better healthcare outcomes.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16">

          <div className="bg-blue-50 rounded-3xl p-10 shadow-md hover:shadow-2xl transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
              alt="tablet"
              className="w-20"
            />

            <h2 className="text-3xl font-bold text-blue-900 mt-8">
              Tablets
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              High-quality tablet formulations designed for
              effective healthcare treatment.
            </p>

          </div>

          <div className="bg-blue-50 rounded-3xl p-10 shadow-md hover:shadow-2xl transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
              alt="capsules"
              className="w-20"
            />

            <h2 className="text-3xl font-bold text-blue-900 mt-8">
              Capsules
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Trusted capsule products manufactured with
              advanced pharmaceutical standards.
            </p>

          </div>

          <div className="bg-blue-50 rounded-3xl p-10 shadow-md hover:shadow-2xl transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
              alt="syrup"
              className="w-20"
            />

            <h2 className="text-3xl font-bold text-blue-900 mt-8">
              Syrups
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Safe and effective syrup formulations for
              quality healthcare support.
            </p>

          </div>

        </div>
      </section>

      {/* Directors Section */}
      <section
        id="directors"
       
        className="px-5 md:px-10 py-16 md:py-24 bg-gray-50"
      >

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Leadership
          </p>

          <h1 className="text-5xl font-bold text-blue-950 mt-5">
            Meet Our Directors
          </h1>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">

          {/* Director 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="director"
              className="w-36 mx-auto"
            />

            <h2 className="text-3xl font-bold text-blue-900 mt-8">
              Prabhal Sethi
            </h2>

            <p className="text-blue-700 mt-2 font-medium">
              Co-Founder & Managing Director
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              Dedicated to building trusted pharmaceutical
              solutions with innovation and integrity.
            </p>

          </div>

          {/* Director 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="director"
              className="w-36 mx-auto"
            />

            <h2 className="text-3xl font-bold text-blue-900 mt-8">
              Maheep Wadhwa
            </h2>

            <p className="text-blue-700 mt-2 font-medium">
              Co-Founder & Operations Head
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              Focused on maintaining pharmaceutical excellence
              and customer satisfaction.
            </p>

          </div>

        </div>
      </section>

      {/* Contact Section */}
     {/* Contact Section */}
<section
  id="contact"
  className="px-5 md:px-10 py-16 md:py-24 bg-white"
>

  <div className="text-center">

    <p className="text-blue-700 font-semibold uppercase tracking-widest">
      Contact Us
    </p>

    <h1 className="text-5xl font-bold text-blue-950 mt-5">
      Get In Touch
    </h1>

    <p className="mt-6 text-lg text-gray-600">
      Reach out to us for pharmaceutical inquiries and business partnerships.
    </p>

  </div>

  {/* Contact Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-20">

    {/* Address */}
    <div className="bg-blue-50 rounded-3xl p-10 shadow-md text-center">

      <div className="text-5xl">
        📍
      </div>

      <h2 className="text-3xl font-bold text-blue-900 mt-6">
        Address
      </h2>

      <p className="mt-5 text-gray-600 leading-7">
        Punjab, India
      </p>

    </div>

    {/* Phone */}
    <div className="bg-blue-50 rounded-3xl p-10 shadow-md text-center">

      <div className="text-5xl">
        📞
      </div>

      <h2 className="text-3xl font-bold text-blue-900 mt-6">
        Phone
      </h2>

      <p className="mt-5 text-gray-600 leading-7">
        +91 80545 58202
      </p>

      <p className="text-gray-600 leading-7">
        +91 99151 79993
      </p>

    </div>

    {/* Email */}
    <div className="bg-blue-50 rounded-3xl p-10 shadow-md text-center">

      <div className="text-5xl">
        ✉️
      </div>

      <h2 className="text-3xl font-bold text-blue-900 mt-6">
        Email
      </h2>

      <p className="mt-5 text-gray-600 leading-7 break-words">
        shreejipharmaceuticalsmkt@gmail.com
      </p>

      {/* <p className="text-gray-600 leading-7">
        prabhalsethi@gmail.com
      </p> */}

    </div>

  </div>
</section>
      <Footer />

    </div>
  );
}

export default App;