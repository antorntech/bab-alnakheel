import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_my0lawj", "template_hyyg9ky", form.current, {
        publicKey: "wdR_szJ_BlzIt4PUq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Form submitted successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="w-full md:max-w-4xl mx-auto pb-5"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name<span className="text-[#cb9b2c]">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb9b2c]`}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="mobile"
          >
            Mobile Number<span className="text-[#cb9b2c]">*</span>
          </label>
          <input
            id="mobile"
            type="text"
            name="user_mobile"
            placeholder="Enter Your Number"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb9b2c]`}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email Address<span className="text-[#cb9b2c]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            required
            placeholder="Enter Your Email"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb9b2c]`}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            rows="1"
            id="subject"
            name="user_subject"
            placeholder="Enter Your Subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb9b2c]"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows="3"
            id="message"
            name="user_message"
            placeholder="Enter Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb9b2c]"
          />
        </div>

        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className="px-4 py-2 md:px-5 md:py-3 bg-[#cb9b2c] border-2 border-[#cb9b2c] text-white hover:bg-[#cb9b2c] hover:border-[#cb9b2c] rounded-md hover:shadow-lg transition-all duration-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
