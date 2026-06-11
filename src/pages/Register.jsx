import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError(
        "Password must contain an uppercase letter"
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError(
        "Password must contain a lowercase letter"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success(
            "Registration Successful"
          );

          form.reset();

          navigate("/login");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleRegister = () => {
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
          Create Account
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            required
          />

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
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleRegister}
          className="btn w-full mt-4"
        >
          Continue With Google
        </button>

        <p className="text-center text-gray-300 mt-5">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;