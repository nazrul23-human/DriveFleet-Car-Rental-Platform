import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen flex items-center justify-center">

      <div className="text-center px-6">

        <h1 className="text-8xl font-bold text-cyan-500">
          404
        </h1>

        <h2 className="text-4xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-300 mt-4">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="btn bg-cyan-500 text-white border-none mt-8 hover:bg-cyan-600"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;