import React from "react";
import NavBar from "./NavBar"; // Importing the NavBar component
import BG1 from "../../assets/golf/teetimes.png"; // Importing the background image (assuming it's a default fallback image)

// Defining a functional component called MiniHeader, which takes 'heading' and 'image' as props
const MiniHeader = ({ heading, image }) => {
  return (
    <>
      <NavBar /> {/* Rendering the NavBar component */}
      <div className="h-20"></div> {/* Adding some empty space with a fixed height */}
      <div
        className="overflow-hidden bg-cover bg-center relative h-80 grid place-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${
            image || BG1
          }`, // Setting the background image dynamically using CSS
        }}
      >
        <h1 className="text-white text-3xl sm:text-7xl font-DinCondensed uppercase font-bold tracking-wide ">
          {heading} {/* Rendering the 'heading' passed as a prop */}
        </h1>
        {/* <div className="max-w-screen-xl px-4 mx-auto flex justify-center items-center w-full h-full"></div> */}
        {/* (Commented out) A placeholder div that seems to be unused in this code */}
      </div>
    </>
  );
};

export default MiniHeader; // Exporting the MiniHeader component for use in other parts of the application
