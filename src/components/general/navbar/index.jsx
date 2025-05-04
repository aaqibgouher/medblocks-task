import { Link } from "react-router-dom";

const NavbarComponent = () => (
  <nav className="bg-white shadow-sm py-4 px-6">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link
          to="/"
          className="text-gray-800 font-medium hover:text-black transition"
        >
          <img
            src="https://medblocks.com/assets/ae8d78b9-65f2-43f9-a265-3b210864a18c.webp"
            alt="Logo"
            width="348"
            height="82"
            className="h-[35px] shrink-0 w-auto"
          />
        </Link>
      </div>

      {/* Nav Links + Button */}
      <div className="flex items-center space-x-6">
        <Link
          to="/patients"
          className="text-gray-800 font-medium hover:text-black transition"
        >
          About us
        </Link>
        <Link
          to="/patients"
          className="text-gray-800 font-medium hover:text-black transition"
        >
          Patients
        </Link>
        <Link
          to="/patients"
          className="text-gray-800 font-medium hover:text-black transition"
        >
          Docs
        </Link>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium shadow-md transition duration-300">
          Book a call
        </button>
      </div>
    </div>
  </nav>
);

export default NavbarComponent;
