import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full mt-6 md:mt-12 px-5 py-2 bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-cover bg-bottom h-[100vh] md:h-[95vh] overflow-hidden">
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full">
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-3xl md:text-6xl font-bold text-white animate__animated animate__fadeInUp"
          >
            Your trusted <br /> business partner
          </h1>
          <p className="py-8 text-white animate__animated animate__fadeInUp w-full md:w-1/2 text-xl">
            We Connect Staffing Services is an award-winning staffing agency in
            Dubai, that offers temporary and permanent staffing placement, and
            workforce management.
          </p>
          <ul className="text-white">
            <li className="animate__animated animate__fadeInUp">
              <i class="fa-solid fa-angles-right me-2 text-xl"></i>
              <span className="text-xl">Professional Team</span>
            </li>
            <li className="animate__animated animate__fadeInUp">
              <i class="fa-solid fa-angles-right me-2 text-xl"></i>
              <span className="text-xl">7 Years of Experience</span>
            </li>
            <li className="animate__animated animate__fadeInUp">
              <i class="fa-solid fa-angles-right me-2 text-xl"></i>
              <span className="text-xl">Quality of services</span>
            </li>
          </ul>
          <Link
            to="/contactus"
            className="mt-2 md:mt-4 lg:mt-8 inline-block px-4 py-2 md:px-5 md:py-3 bg-transparent border-2 border-[#fff] text-white hover:bg-[#cb9b2c] hover:border-[#cb9b2c] rounded-md hover:shadow-lg animate__animated animate__fadeInUp transition-all duration-500"
          >
            Get Start Now <i class="fa-solid fa-location-arrow ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
