import React from "react";

const FeaturedServices = () => {
  return (
    <div className="w-full px-5 py-[20px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12">
          <div className="p-0 md:p-3 text-center md:text-start">
            <img
              src="/images/award.png"
              alt="award.png"
              className="size-20 mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <h2
              className="text-xl md:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Quality
            </h2>
            <p
              className="text-gray-500 pt-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae cumque animi, nobis tenetur blanditiis vitae reiciendis
              officiis debitis architecto ipsam iure beatae iusto inventore
              asperiores nam sunt quia corporis molestias aspernatur!
            </p>
          </div>
          <div className="p-0 md:p-3 text-center md:text-start">
            <img
              src="/images/power.png"
              alt="power.png"
              className="size-20 mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <h2
              className="text-xl md:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Knowledge
            </h2>
            <p
              className="text-gray-500 pt-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae cumque animi, nobis tenetur blanditiis vitae reiciendis
              officiis debitis architecto ipsam iure beatae iusto inventore
              asperiores nam sunt quia corporis molestias aspernatur!
            </p>
          </div>
          <div className="p-0 md:p-3 text-center md:text-start">
            <img
              src="/images/responsibility.png"
              alt="responsibility.png"
              className="size-20 mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <h2
              className="text-xl md:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Responsibility
            </h2>
            <p
              className="text-gray-500 pt-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae cumque animi, nobis tenetur blanditiis vitae reiciendis
              officiis debitis architecto ipsam iure beatae iusto inventore
              asperiores nam sunt quia corporis molestias aspernatur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
