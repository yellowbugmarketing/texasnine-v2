// Importing image assets
import header1 from "../.././assets/golf/header1.png";
import header2 from "../.././assets/golf/header2.png";
import header3 from "../.././assets/golf/header3.png";
import header4 from "../.././assets/golf/header4.png";
import header5 from "../.././assets/golf/header5.png";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing CSS styles for the carousel (requires a loader)
import NavBar from "./NavBar";
import Slider from "react-slick";

// Create an array containing the imported header images
const images = [header1, header2, header3, header4, header5];

const Header = () => {
  // Configuration settings for the carousel
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };

  return (
    <>
      <NavBar /> {/* Render the NavBar component */}
      
      {/* Container for the carousel */}
      <div className="pt-20 font-primary overflow-hidden">
        {/* Initialize the carousel with the provided settings */}
        <Slider {...settings} className="mt-10 lg:mt-0 h-full lg:h-[55vh]">
          {/* Map through the images array and render each image */}
          {images.map((image, idx) => (
            <div key={idx} className="w-full">
              {/* Render each image with appropriate styling */}
              <img
                src={image}
                className="w-full h-full lg:h-[55vh] object-center object-contain lg:object-cover"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Header; // Export the Header component for use in other parts of the application

