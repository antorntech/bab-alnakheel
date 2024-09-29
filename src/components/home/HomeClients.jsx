import React from "react";

const HomeClients = () => {
  const clients = [
    {
      id: 1,
      name: "Sponsor 1",
      image: "images/clients/sponsor-1.png",
    },
    {
      id: 2,
      name: "Sponsor 2",
      image: "images/clients/sponsor-2.png",
    },
    {
      id: 3,
      name: "Sponsor 3",
      image: "images/clients/sponsor-3.png",
    },
    {
      id: 4,
      name: "Sponsor 4",
      image: "images/clients/sponsor-4.png",
    },
    {
      id: 5,
      name: "Sponsor 5",
      image: "images/clients/sponsor-5.png",
    },
    {
      id: 6,
      name: "Sponsor 6",
      image: "images/clients/sponsor-6.png",
    },
    {
      id: 7,
      name: "Sponsor 7",
      image: "images/clients/sponsor-7.png",
    },
    {
      id: 8,
      name: "Sponsor 8",
      image: "images/clients/sponsor-8.png",
    },
    {
      id: 9,
      name: "Sponsor 9",
      image: "images/clients/sponsor-9.png",
    },
    {
      id: 10,
      name: "Sponsor 10",
      image: "images/clients/sponsor-10.png",
    },
    {
      id: 11,
      name: "Sponsor 11",
      image: "images/clients/sponsor-11.png",
    },
  ];
  return (
    <div className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-screen-xl mx-auto"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="mb-3 md:mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
            Clients
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#cb9b2c]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
          <p className="text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            debitis eligendi, aliquam ea maxime facere velit officiis, tenetur
            eveniet itaque suscipit accusamus numquam quibusdam doloremque atque
            blanditiis molestiae? Alias, et?
          </p>
        </div>
        <div className="client-logos mt-5 md:mt-14">
          {clients.map((client) => (
            <div className="logos-slide" key={client.id}>
              <img src={client.image} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeClients;
