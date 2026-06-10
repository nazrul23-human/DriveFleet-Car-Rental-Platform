import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ExploreCars from "../pages/ExploreCars";
import Login from "../pages/Login";
import Register from "../pages/Register";

// এগুলো এখন placeholder page হবে
import AddCar from "../pages/AddCar";
import MyBookings from "../pages/MyBookings";
import MyAddedCars from "../pages/MyAddedCars";

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
        element: <AddCar />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/my-added-cars",
        element: <MyAddedCars />,
      },
    ],
  },
]);

export default router;