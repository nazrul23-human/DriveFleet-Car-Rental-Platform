
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => {
        const singleCar = data.find(
          (car) => car.id === parseInt(id)
        );

        setCar(singleCar);
      });
  }, [id]);

  if (!car) {
    return (
      <div className="text-center py-20 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-[#16233b] rounded-2xl p-8">

          <img
            src={car.image}
            alt={car.name}
            className="w-full h-96 object-cover rounded-xl"
          />

          <h1 className="text-4xl font-bold text-white mt-8">
            {car.name}
          </h1>

          <p className="text-cyan-400 text-xl mt-2">
            {car.type}
          </p>

          <p className="text-gray-300 mt-6">
            Premium rental vehicle with excellent comfort,
            performance and safety features.
          </p>

          <p className="text-3xl font-bold text-cyan-400 mt-6">
            ${car.price} / Day
          </p>

          <button className="btn bg-cyan-500 text-white border-none mt-8">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default CarDetails;