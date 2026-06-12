
import { useEffect, useState } from "react";

const ExploreCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Explore Cars
        </h1>

        <p className="text-center text-gray-300 mb-12">
          Browse our collection of premium rental vehicles.
        </p>

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

      </div>

    </div>
  );
};

export default ExploreCars;