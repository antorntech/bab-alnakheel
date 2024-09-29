import React from "react";

const MissionVision = () => {
  return (
    <div className="px-5 md:px-0 pt-[20px] md:pt-[50px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="group shadow-lg"
          >
            <div>
              <img
                src="/images/mission.jpg"
                alt="mission.jpg"
                className="w-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex justify-center items-center rounded-full bg-white">
                <div className="bg-[#cb9b2c] group-hover:bg-white rounded-full w-16 h-16 flex justify-center items-center transition-all duration-500">
                  <i class="fa-solid fa-crosshairs text-[40px] text-white group-hover:text-[#cb9b2c] transition-all duration-500"></i>
                </div>
              </div>
              <div className="p-5 mt-5">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-2 uppercase">
                  Our Mission
                </h2>
                <p className="text-gray-500 text-center">
                  Our mission is to facilitate seamless access to high-quality
                  pharmaceutical ingredients, ensuring compliance with industry
                  standards and regulations. Our experienced team of
                  professionals leverages their extensive network and market
                  insights to provide tailored solutions that meet the unique
                  needs of our clients.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="group shadow-lg"
          >
            <div>
              <img
                src="/images/about-plan.jpg"
                alt="about-plan.jpg"
                className="w-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex justify-center items-center rounded-full bg-white">
                <div className="bg-[#cb9b2c] group-hover:bg-white rounded-full w-16 h-16 flex justify-center items-center transition-all duration-500">
                  <i class="fa-regular fa-map text-[40px] text-white group-hover:text-[#cb9b2c] transition-all duration-500"></i>
                </div>
              </div>
              <div className="p-5 mt-5">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-2 uppercase">
                  Our Plan
                </h2>
                <p className="text-gray-500 text-center">
                  Our plan is to facilitate seamless access to high-quality
                  pharmaceutical ingredients, ensuring compliance with industry
                  standards and regulations. Our experienced team of
                  professionals leverages their extensive network and market
                  insights to provide tailored solutions that meet the unique
                  needs of our clients.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="group shadow-lg"
          >
            <div>
              <img
                src="/images/vision.jpg"
                alt="vision.jpg"
                className="w-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex justify-center items-center rounded-full bg-white">
                <div className="bg-[#cb9b2c] group-hover:bg-white rounded-full w-16 h-16 flex justify-center items-center transition-all duration-500">
                  <i class="fa-regular fa-eye text-[40px] text-white group-hover:text-[#cb9b2c] transition-all duration-500"></i>
                </div>
              </div>
              <div className="p-5 mt-5">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-2 uppercase">
                  Our Vision
                </h2>
                <p className="text-gray-500 text-center">
                  Our commitment is to support the development of safe,
                  effective and affordable medicines, while building lasting
                  relationships with our clients and suppliers through integrity
                  and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
