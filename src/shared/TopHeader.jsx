import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-[#cb9b2c] text-white text-center py-2 md:py-5">
      <div className="max-w-screen-xl mx-auto hidden md:block">
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-5">
            <p>
              <i class="fa-solid fa-envelope me-2"></i>
              <span>info@skyclouds.ae Dubai</span>
            </p>
            <p>
              <i class="fa-solid fa-location-dot me-2"></i>
              <span>Dubai - United Arab Emirates</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <span>Call Now: +971 52 872 1218</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden gap-2">
        <i class="fa-solid fa-phone"></i>
        <span>Call Now: +971 52 872 1218</span>
      </div>
    </div>
  );
};

export default TopHeader;
