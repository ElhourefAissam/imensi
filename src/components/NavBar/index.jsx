import React from "react";
import Links from "./components/Links";
import Logo from "./components/Logo";
import Search from "./components/Search";

const Header = () => (
  <nav className="bg-white" style={{ height: "70px" }}>
    <div className="max-w-7xl">
      <div className="flex justify-around">
        {/* <!-- Logo section --> */}
        <Logo />
        {/* <!-- Search section --> */}
        <Search />
        {/* <!-- Links section --> */}
        <Links />
        {/* <!-- Notification button, Language, and Profile section --> */}
        <div className="flex items-center">
          <button
            type="button"
            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">View notifications</span>
          </button>

          <div className="relative">
            {/* <!-- Dropdown button --> */}
            <button className="relative z-10 block rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Change language</span>
              {/* <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              /> */}
            </button>

            {/* <!-- Dropdown menu --> */}
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md overflow-hidden shadow-lg z-20">
              {/* <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                English
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                French
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                German
              </a> */}
            </div>
          </div>

          <div className="ml-4 flex items-center lg:ml-6">
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              {/* <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              /> */}
            </button>
            <p className="hidden lg:block ml-3 text-sm font-medium text-gray-300">
              Jane Doe
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
