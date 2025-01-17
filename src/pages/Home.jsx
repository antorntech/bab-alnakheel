import React from "react";
import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";
import HomeClients from "../components/home/HomeClients";
import HomeContactForm from "../components/home/HomeContactForm";
import HomeGallery from "../components/home/HomeGallery";
import Reviews from "../components/home/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeGallery />
      <HomeClients />
      <Reviews />
      <HomeContactForm />
    </div>
  );
};

export default Home;
