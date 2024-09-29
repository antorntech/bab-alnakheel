import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

const TermsCondition = () => {
  return (
    <>
      <PageHeader title="Terms & Conditions" />
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg md:my-10">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="mb-5 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
            Terms & Conditions
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#cb9b2c]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to [Pharmaceutical Company Name]. These terms and conditions
            outline the rules and regulations for the use of our website and
            services. By accessing or using our website, you accept and agree to
            be bound by these terms and conditions. If you do not agree with any
            part of the terms, please refrain from using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are intended for use by individuals over the age of 18.
            By using our services, you warrant that you are of legal age and
            agree to comply with all applicable local, state, and federal laws.
            You agree not to misuse our services or interfere with our
            operations in any way.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content, trademarks, logos, and intellectual property found on
            this website are owned by or licensed to [Pharmaceutical Company
            Name]. You may not use, reproduce, or distribute any of the content
            without prior written consent from us. Any unauthorized use of our
            intellectual property may result in legal action.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            While we strive to provide accurate and up-to-date information,
            [Pharmaceutical Company Name] does not warrant that the information
            on this website is free from errors. We are not liable for any
            damages or losses resulting from the use of our website or reliance
            on its content. You use our services at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites that are not
            operated or controlled by us. We are not responsible for the
            content, privacy practices, or any interactions you may have with
            such third-party sites. Visiting these links is at your own risk,
            and we recommend reviewing their terms and conditions before using
            their services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify or replace these terms and conditions
            at any time. Any changes will be effective immediately upon posting
            the updated terms on our website. Your continued use of our services
            after changes have been made signifies your acceptance of the
            revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Country/State]. Any disputes
            arising from these terms will be subject to the exclusive
            jurisdiction of the courts of [Your Country/State].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about these terms and
            conditions, feel free to contact us at:
          </p>
          <p className="mt-4 text-gray-700">
            <strong>Email:</strong> mj.rawfusion@gmail.com <br />
            <strong>Phone:</strong> +88-01601-900949 / +88-01920-810804
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-500 text-sm text-center">
            Last updated: September 2024
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsCondition;
