import { NavLink } from "react-router-dom";

const Navbar = () => {

  const user = null;

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
                  src="https://i.ibb.co/4pDNDk1/avatar.png"
                  alt="user"
                  className="w-12 h-12 rounded-full"
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
                  <button>
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