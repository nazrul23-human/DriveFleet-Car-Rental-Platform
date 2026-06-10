import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#16233b] text-white py-12">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            DriveFleet
          </h2>

          <p className="mt-4 text-gray-300">
            Premium car rental platform.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Useful Links
          </h3>

          <p>Home</p>
          <p>Explore Cars</p>
          <p>Login</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Contact
          </h3>

          <p>Dhaka, Bangladesh</p>
          <p>support@drivefleet.com</p>
        </div>

        <div>

          <h3 className="font-bold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">

            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;