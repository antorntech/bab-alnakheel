import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg md:my-10">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="mb-5 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
            Privacy Policy
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
            At BAB ALNAKHEEL, your privacy is of utmost importance to us. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information in compliance with industry standards and legal
            regulations. By using our services, you agree to the terms described
            in this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information such as your name, contact
            details, medical history, and prescription information when you
            interact with our services. This data may be collected when you:
          </p>
          <ul className="list-disc ml-8 mt-4 text-gray-700">
            <li>Fill out forms on our website</li>
            <li>Contact us via email or phone</li>
            <li>Make a purchase or request pharmaceutical services</li>
            <li>Subscribe to our newsletters</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The information we collect is used to:
          </p>
          <ul className="list-disc ml-8 mt-4 text-gray-700">
            <li>Provide you with pharmaceutical products and services</li>
            <li>Process your orders and transactions</li>
            <li>Improve our services and customer support</li>
            <li>Send you relevant updates and promotional materials</li>
            <li>
              Comply with legal obligations, including those related to patient
              care and drug safety
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We take the security of your data very seriously. We implement
            robust encryption, firewalls, and secure data storage measures to
            protect your personal information from unauthorized access, misuse,
            or disclosure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or share your personal information with third
            parties, except when necessary for providing services or when
            required by law. Your information may be shared with:
          </p>
          <ul className="list-disc ml-8 mt-4 text-gray-700">
            <li>
              Medical professionals or pharmacies to fulfill prescriptions
            </li>
            <li>
              Regulatory authorities to ensure compliance with pharmaceutical
              regulations
            </li>
            <li>Payment processing services for transactions</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc ml-8 mt-4 text-gray-700">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to your personal data</li>
            <li>Withdraw your consent to data collection at any time</li>
            <li>Request the deletion of your personal information</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, or
            if you would like to exercise any of your rights, please contact us
            at:
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

export default PrivacyPolicy;
