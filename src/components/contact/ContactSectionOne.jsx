import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const ContactSectionOne = () => {
  return (
    <div className="px-5 md:px-0 py-[20px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-10 h-full">
          <div className="w-full md:w-1/2 custom-shadow p-5 md:p-8 rounded-md flex flex-col">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-center md:text-start text-md md:text-lg text-[#cb9b2c] uppercase mt-5 md:mt-0"
            >
              Get in touch
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-center md:text-start text-2xl md:text-5xl font-bold mt-2 md:mt-5"
            >
              Let's start talk with us.
            </h2>
            <hr className="text-gray-300 my-5 w-3/4" />
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="flex flex-col md:flex-row text-center md:text-left items-start gap-2 md:gap-5 p-2 rounded-md"
            >
              <div className="w-full md:w-[10%]">
                <div className="bg-[#cb9b2c60] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <img
                    src="/images/location.png"
                    alt="location.png"
                    className="w-8 mx-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-[90%]">
                <h2 className="text-md md:text-xl font-semibold text-gray-500">
                  Location
                </h2>
                <p className="mt-2 text-gray-700">
                  Dubai - United Arab Emirates
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="my-0 md:my-8 flex flex-col md:flex-row text-center md:text-left items-start gap-2 md:gap-5 p-2 rounded-md"
            >
              <div className="w-full md:w-[10%]">
                <div className="bg-[#cb9b2c60] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <img
                    src="/images/phone.png"
                    alt="phone.png"
                    className="w-8 mx-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-[90%]">
                <h2 className="text-md md:text-xl font-semibold text-gray-500">
                  Call us
                </h2>
                <p className="mt-2 text-gray-700">+971 4 395 3133</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex flex-col md:flex-row text-center md:text-left items-start gap-2 md:gap-5 p-2 rounded-md"
            >
              <div className="w-full md:w-[10%]">
                <div className="bg-[#cb9b2c60] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <img
                    src="/images/mail.png"
                    alt="mail.png"
                    className="w-8 mx-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-[90%]">
                <h2 className="text-md md:text-xl font-semibold text-gray-500">
                  Email
                </h2>
                <p className="mt-2 text-gray-700">info@babalnakheen.ae</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 custom-shadow p-5 md:p-8 rounded-md flex-grow flex flex-col">
            <h2 className="text-center md:text-start text-2xl md:text-5xl font-bold mb-5">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionOne;
