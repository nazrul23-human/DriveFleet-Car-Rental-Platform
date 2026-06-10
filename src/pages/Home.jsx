import { Link } from "react-router-dom";

const Home = () => {
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

    </div>
  );
};

export default Home;