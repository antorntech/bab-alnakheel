import React from "react";

const HomeAbout = () => {
  return (
    <div className="px-5 py-[20px] md:py-[80px] lg:py-[100px]">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w1/2 order-2 md:order-1">
            <h2 className="text-2xl md:text-5xl font-bold my-2 md:my-5">
              Providing staffing service in Dubai
            </h2>
            <p className="text-gray-500 mt-5">
              Founded year 2015 in Dubai, United Arab Emirates, BAB ALNAKHEEL
              Hospitality Service L.L.C. a hospitality service industry key
              focused on hospitality industry specifically in hotel sector, one
              of the most defining aspects of this company is that it focuses on
              customer satisfaction.
            </p>
            <p className="text-gray-500 mt-5">
              While this is true of nearly every business, this company relies
              entirely on customer’s being happy. This is because these
              businesses are based on providing luxury services.
            </p>
            <p className="text-gray-500 mt-5">
              The majority of business niches are composed of only a handful of
              different businesses, but this industry applies to nearly any
              company that is focused on customer satisfaction and meeting
              leisurely needs of the guest.
            </p>
          </div>
          <div className="w-full md:w1/2 order-1 md:order-2">
            <img
              src="/images/home-about-bg.jpg"
              alt="home-about-bg.jpg"
              className="w-full object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
