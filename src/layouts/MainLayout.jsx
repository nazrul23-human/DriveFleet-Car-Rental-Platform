import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#08152f] min-h-screen">

      <Navbar />

      <Outlet />

      <Footer />

    </div>
  );
};

export default MainLayout;