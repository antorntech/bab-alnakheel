import React from "react";

const HomeGallery = () => {
  const gallery = [
    {
      id: 1,
      image: "/images/x1.jpg",
    },
    {
      id: 2,
      image: "/images/gallery2.jpg",
    },
    {
      id: 3,
      image: "/images/gallery3.jpg",
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
            Gallery
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#cb9b2c]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
          <p className="text-gray-500 text-center mt-3">
            While this is true of nearly every business, this company relies
            entirely on customer’s being happy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {gallery.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="w-full h-full group relative overflow-hidden rounded-md"
            >
              <img
                src={item.image}
                alt="image"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-[#cb9b2c] opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
