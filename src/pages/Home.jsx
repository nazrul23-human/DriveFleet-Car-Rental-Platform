import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div>

            <h1 className="text-5xl md:text-7xl font-bold text-white">
              DriveFleet
            </h1>

            <h2 className="text-3xl font-semibold text-white mt-6">
              Rent Your Dream Car
            </h2>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              Explore premium vehicles, book in minutes,
              and hit the road with confidence.
              SUVs, sedans, luxury cars, and more —
              all in one place.
            </p>

            <Link
              to="/explore-cars"
              className="btn bg-cyan-500 text-white border-none hover:bg-cyan-600 mt-8"
            >
              Explore Cars
            </Link>

          </div>

          {/* Right Side */}
          <div>

            <img
              src="https://i.ibb.co.com/VYvT2h07/2-Hero-Car.jpg"
              alt="Car"
              className="w-full"
            />

          </div>

        </div>


      </div>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Available Cars
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-[#16233b] rounded-xl p-4 shadow-lg hover:scale-105 duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover rounded-lg"
              />

              <h3 className="text-white text-xl font-bold mt-4">
                {car.name}
              </h3>

              <p className="text-gray-300">
                {car.type}
              </p>

              <p className="text-cyan-400 font-bold mt-2">
                ${car.price} / Day
              </p>

              <button className="btn bg-cyan-500 text-white border-none mt-4 w-full hover:bg-cyan-600">
                View Details
              </button>
            </div>
          ))}
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Why Choose DriveFleet?
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience hassle-free car rentals with premium vehicles,
          transparent pricing, and reliable customer support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-white text-xl font-bold mb-3">
              Premium Cars
            </h3>
            <p className="text-gray-300">
              Choose from luxury, SUV, sedan and economy vehicles.
            </p>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-white text-xl font-bold mb-3">
              Affordable Pricing
            </h3>
            <p className="text-gray-300">
              Competitive daily rental rates with no hidden fees.
            </p>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-white text-xl font-bold mb-3">
              Easy Booking
            </h3>
            <p className="text-gray-300">
              Book your preferred car in just a few clicks.
            </p>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-white text-xl font-bold mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-300">
              Our team is always available to assist you.
            </p>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-white text-xl font-bold mb-3">
              Verified Vehicles
            </h3>
            <p className="text-gray-300">
              Every vehicle is inspected and verified for safety.
            </p>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-white text-xl font-bold mb-3">
              Flexible Rental Plans
            </h3>
            <p className="text-gray-300">
              Rent for a day, week, or month according to your needs.
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Trusted by hundreds of happy customers across the country.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <p className="text-gray-300">
              "Excellent service! The booking process was smooth and the car was in perfect condition."
            </p>

            <h4 className="text-white font-bold mt-4">
              — Rahim Ahmed
            </h4>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <p className="text-gray-300">
              "Affordable prices and very professional support team. Highly recommended."
            </p>

            <h4 className="text-white font-bold mt-4">
              — Nusrat Jahan
            </h4>
          </div>

          <div className="bg-[#16233b] p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <p className="text-gray-300">
              "The SUV I rented was clean, comfortable, and exactly as described."
            </p>

            <h4 className="text-white font-bold mt-4">
              — Imran Hossain
            </h4>
          </div>

        </div>

      </section>


    </div>

  );
};

export default Home;