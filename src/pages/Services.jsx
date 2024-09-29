import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeServices from "../components/home/HomeServices";

const Services = () => {
  return (
    <>
      <PageHeader title="Services" />
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <HomeServices />
      </div>
    </>
  );
};

export default Services;
