import React from "react";

const WhyChoose = () => {
  return (
    <div className="px-5 md:px-0 py-[20px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w1/2">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-center md:text-start text-md md:text-lg text-[#cb9b2c] uppercase mt-5 md:mt-0"
            >
              Why choose us
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-center md:text-start text-2xl md:text-5xl font-bold my-2 md:my-5"
            >
              Best services available for the best customers
            </h2>
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              src="/images/testimonial.png"
              alt="testimonial.png"
              className="w-full object-contain rounded-md"
            />
          </div>
          <div className="w-full md:w1/2">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="flex flex-col md:flex-row text-center md:text-left items-start gap-3 custom-shadow p-5 rounded-md"
            >
              <div className="w-full md:w-[10%]">
                <img
                  src="/images/heart.png"
                  alt="heart.png"
                  className="w-24 mx-auto"
                />
              </div>
              <div className="w-full md:w-[90%]">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-500">
                  Honesty & transparency
                </h2>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="my-8 flex flex-col md:flex-row text-center md:text-left items-start gap-3 custom-shadow p-5 rounded-md"
            >
              <div className="w-full md:w-[10%]">
                <img
                  src="/images/tag.png"
                  alt="tag.png"
                  className="w-24 mx-auto"
                />
              </div>
              <div className="w-full md:w-[90%]">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-500">
                  Extra Discount
                </h2>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex flex-col md:flex-row text-center md:text-left items-start gap-3 custom-shadow p-5 rounded-md"
            >
              <div className="w-full md:w-[10%]">
                <img
                  src="/images/headphones.png"
                  alt="headphones.png"
                  className="w-24 mx-auto"
                />
              </div>
              <div className="w-full md:w-[90%]">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-500">
                  24/7 Premium Support
                </h2>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
