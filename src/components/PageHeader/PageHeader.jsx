import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = ({ title }) => {
  const location = useLocation();
  return (
    <div
      className="w-full mt-20 h-[25vh] md:h-[40vh] flex justify-center items-center"
      style={{
        backgroundImage: `url('/images/pageheader-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl lg:text-6xl font-bold animate__animated animate__fadeInUp">
          {title}
        </h1>
        <div className="animate__animated animate__fadeInUp mt-1 md:mt-2">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <span className="text-gray-300 capitalize">
            {" "}
            <i class="fa-solid fa-angles-right text-white"></i>{" "}
            {location.pathname.split("/").pop()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
