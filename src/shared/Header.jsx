import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainMenu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Contact Us",
      path: "/contactus",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  // Add the 'scrolled' class to the header when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      // Add the 'scrolled' class to the header when scrolling down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        // Remove the 'scrolled' class when at the top
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* desktop menu */}
      <div
        className={`hidden w-full md:flex items-center py-2 gap-3 bg-white fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "header-shadow z-40 top-0 py-2 shadow-md" : ""
        }`}
      >
        <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="/images/logo-dark.png" alt="logo-dark.png" />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {mainMenu.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#cb9b2c] text-[18px] font-semibold transition duration-300"
                      : "text-black text-[18px] font-[500] hover:text-[#cb9b2c] transition duration-300"
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`w-full md:hidden fixed left-0 z-50 bg-white shadow-md ${
          scrolled ? "header-shadow z-40 top-0 py-1 shadow-md" : "bg-white"
        }`}
      >
        <div className="p-3 flex items-center justify-between lg:hidden">
          <div className="border-2 border-[#cb9b2c] px-2 rounded-md">
            <i
              className={`fa-solid transition-all ease-out duration-500 mt-1 ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-[25px] text-[#cb9b2c]`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
          <div>
            <Link to="/">
              <img
                src="/images/logo-dark.png"
                alt="logo-dark.png"
                className="w-[150px]"
              />
            </Link>
          </div>
        </div>

        {/* Mobile menu container with transition */}
        <div
          className={`flex flex-col gap-2 px-3 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] pb-3" : "max-h-0"
          }`}
        >
          {mainMenu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cb9b2c] text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-[#cb9b2c] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
