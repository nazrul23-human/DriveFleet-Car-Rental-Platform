import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/explore-cars">
          Explore Cars
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/add-car">
              Add Car
            </NavLink>
          </li>

          <li>
            <NavLink to="/my-bookings">
              My Bookings
            </NavLink>
          </li>
        </>
      )}
    </>
  );


  return (
    <div className="bg-[#16233b] border-b border-slate-700">

      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Logo */}
        <div className="navbar-start">

          <h2 className="text-3xl font-bold text-cyan-400">
            DriveFleet
          </h2>

        </div>

        {/* Menu */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-3 text-white">
            {navLinks}
          </ul>

        </div>

        {/* Right Side */}
        <div className="navbar-end">

          {user ? (
            <div className="dropdown dropdown-end">

              <div
                tabIndex={0}
                role="button"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  referrerPolicy="no-referrer"
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                />
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-[#16233b] rounded-box w-52 text-white"
              >
                <li>
                  <NavLink to="/add-car">
                    Add Car
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/my-bookings">
                    My Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/my-added-cars">
                    My Added Cars
                  </NavLink>
                </li>

                <li>
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>

            </div>
          ) : (
            <div className="flex gap-3">

              <NavLink
                to="/login"
                className="btn bg-cyan-500 text-white border-none hover:bg-cyan-600"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="btn bg-cyan-500 text-white border-none hover:bg-cyan-600"
              >
                Register
              </NavLink>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Navbar;