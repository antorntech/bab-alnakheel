import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeAbout from "../components/home/HomeAbout";
import MissionVision from "../components/about/MissionVision";
import DiscoverMore from "../components/home/DiscoverMore";
import WhyChoose from "../components/about/WhyChoose";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <HomeAbout />
    </>
  );
};

export default AboutUs;
