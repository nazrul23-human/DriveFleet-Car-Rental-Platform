import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ExploreCars from "../pages/ExploreCars";
import Login from "../pages/Login";
import Register from "../pages/Register";


import AddCar from "../pages/AddCar";
import MyBookings from "../pages/MyBookings";
import MyAddedCars from "../pages/MyAddedCars";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore-cars",
        element: <ExploreCars />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added-cars",
        element: (
          <PrivateRoute>
            <MyAddedCars />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;