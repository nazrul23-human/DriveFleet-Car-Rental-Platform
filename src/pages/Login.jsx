import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful");

        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success(
          "Google Login Successful"
        );

        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">

      <div className="bg-[#16233b] p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

          <button
            className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none w-full"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full mt-4"
        >
          Continue With Google
        </button>

        <p className="text-center text-gray-300 mt-5">
          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;