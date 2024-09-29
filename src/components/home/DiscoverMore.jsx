import React from "react";
import { Link } from "react-router-dom";

const DiscoverMore = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="w-full px-5 bg-[url('/images/discovermore-bg.png')] bg-no-repeat bg-cover bg-bottom h-[100vh] md:h-[70vh] overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full text-center">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-2xl md:text-5xl font-bold text-white capitalize"
          >
            A company with world-class <br /> service.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
            className="text-gray-200 py-6 w-full md:w-2/4 mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            to="/contactus"
            className="mt-1 inline-block px-4 py-2 md:px-5 md:py-3 bg-gradient-to-l from-[#cb9b2c] to-[#039dda] text-white rounded-md shadow-lg"
          >
            Discover More <i class="fa-solid fa-location-arrow ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
