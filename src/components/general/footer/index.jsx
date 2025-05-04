const FooterComponent = () => (
  <footer className=" text-gray-700 pt-10 pb-6 mt-auto">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Column 1: Brand */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="https://pbs.twimg.com/profile_images/1615653896709607424/sDaJ4TGC_400x400.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-semibold text-gray-800">Medblocks</span>
        </div>
        <p className="text-sm text-gray-500">
          Save lives with digital healthcare innovation
        </p>
      </div>

      {/* Column 2 to 5: Quick Links */}
      <div>
        <h4 className="text-gray-800 font-semibold mb-3">Patients</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-gray-800">
              Book Appointment
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Find a Doctor
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Health Tips
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-gray-800 font-semibold mb-3">Doctors</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-gray-800">
              Join Network
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Manage Profile
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Doctor Portal
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-gray-800 font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-gray-800">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-gray-800 font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-gray-800">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Horizontal Rule */}
    <hr className="my-6 border-gray-300" />

    {/* Bottom Text */}
    <div className="text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Medblocks. All rights reserved.
    </div>
  </footer>
);

export default FooterComponent;
