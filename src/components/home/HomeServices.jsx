import React from "react";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "Waiter",
      image: "/images/x1.jpg",
    },
    {
      id: 2,
      title: "Waitress",
      image: "/images/x2.jpg",
    },
    {
      id: 3,
      title: "Stewarding",
      image: "/images/x3.jpg",
    },
    {
      id: 4,
      title: "House Keeping",
      image: "/images/x4.jpg",
    },
  ];
  return (
    <div className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="mb-5 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
            What We Do
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#cb9b2c]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
          <p className="text-gray-500 text-center mt-3">
            We provide permanent staffing services in Dubai across a wide
            variety of industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              key={service.id}
              className="bg-white rounded-xl hover:shadow-xl transition-all duration-500"
            >
              <div className="border-b-4 border-[#cb9b2c] rounded-b-xl">
                <div>
                  <img src={service.image} alt="" />
                </div>
                <div className="w-full px-5 py-12 flex items-center justify-center">
                  <h3 className="text-lg md:text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
