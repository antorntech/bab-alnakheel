import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!", {
      autoClose: 1000,
    });
    setEmail("");
  };
  return (
    <>
      <div className="bg-gray-200 px-5 py-5 md:py-12">
        <div className="max-w-screen-xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="w-full flex flex-col items-center md:items-start">
              <img src="/images/logo-dark.png" alt="" width={300} />
              <p className="text-black mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                asperiores, adipisci voluptas perferendis voluptatum illum vero,
                placeat voluptate delectus a qui numquam.
              </p>
              <div className="flex items-center gap-3">
                <Link className="group border-2 rounded-md w-10 h-10 flex justify-center items-center border-[#cb9b2c] hover:border-[#cb9b2c] hover:bg-[#cb9b2c] transition-all duration-500">
                  <i class="fa-brands fa-facebook-f text-[#cb9b2c] group-hover:text-white text-lg"></i>
                </Link>
                <Link className="group border-2 rounded-md w-10 h-10 flex justify-center items-center border-[#cb9b2c] hover:border-[#cb9b2c] hover:bg-[#cb9b2c] transition-all duration-500">
                  <i class="fa-brands fa-linkedin-in text-[#cb9b2c] group-hover:text-white text-lg"></i>
                </Link>
                <Link className="group border-2 rounded-md w-10 h-10 flex justify-center items-center border-[#cb9b2c] hover:border-[#cb9b2c] hover:bg-[#cb9b2c] transition-all duration-500">
                  <i class="fa-brands fa-youtube text-[#cb9b2c] group-hover:text-white text-lg"></i>
                </Link>
                <Link className="group border-2 rounded-md w-10 h-10 flex justify-center items-center border-[#cb9b2c] hover:border-[#cb9b2c] hover:bg-[#cb9b2c] transition-all duration-500">
                  <i class="fa-brands fa-x-twitter text-[#cb9b2c] group-hover:text-white text-lg"></i>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-black text-xl md:text-3xl">Useful Links</h2>
                <div className="w-20 h-1 bg-black mt-2"></div>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="/aboutus"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="/contactus"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h2 className="text-black text-xl md:text-3xl">
                  Important Links
                </h2>
                <div className="w-20 h-1 bg-black mt-2"></div>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="/services"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    Services
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="/downloads"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    Downloads
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h2 className="text-black text-xl md:text-3xl">Contact Us</h2>
                <div className="w-20 h-1 bg-black mt-2"></div>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="#"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    +971 4 395 3133
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="#"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    info@skyclouds.ae
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-black"></div>
                  <Link
                    to="#"
                    className="text-black hover:text-[#cb9b2c] transition-all duration-500"
                  >
                    Dubai - United Arab Emirates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#cb9b2c]">
        <p className="text-white text-sm text-center p-5">
          Copyright © {year} babalnakheel.com – All Rights Reserved | Designed
          and Developed By <i class="fa fa-heart"></i> PeopleNTech
        </p>
      </div>
    </>
  );
};

export default Footer;
