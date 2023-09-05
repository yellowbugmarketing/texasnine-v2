import React, { useEffect } from "react";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import TeeTimesHeader from "../assets/golf/teetime-header.png";
import ArrowDesktop from "../assets/golf/arrow-desktop.png";
import ArrowMobile from "../assets/golf/arrow-mobile.png";

const Tsheet = () => {
  // Effect to show and hide the T-sheet widget
  useEffect(() => {
    // Display the T-sheet widget when the component mounts
    document.getElementById("t-sheet-widget").style.display = "block";

    // Clean-up function to hide the T-sheet widget when the component unmounts
    return () => {
      document.getElementById("t-sheet-widget").style.display = "none";
    };
  }, []);

  return (
    <div>
      {/* Mini header component */}
      <MiniHeader
        heading={"BOOK A TEE TIME"}
        subHeading={""}
        image={TeeTimesHeader}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-x-10 pt-6 lg:pr-20 pb-6 font-primary font-semibold">
        <div className="md:col-span-12 md:flex justify-center items-center h-full">
          <div className="max-w-2xl mx-auto px-18">
            <div className="md:col-span-12 text-center my-4 p-1">
              <h2 className="text-green text-3xl lg:text-5xl font-DinCondensed font-semibold mb-2 uppercase">
                RESERVE YOUR RELAXATION
              </h2>
              <p className="text-center mt-4">
                Minimize the wait and schedule your next visit! Just click the
                green button below!
              </p>
            </div>

            {/* Display ArrowDesktop image */}
            <div className="hidden md:block text-center my-4">
              <img
                src={ArrowDesktop}
                alt="Arrow Desktop"
                className="mx-auto object-fill h-full"
                style={{ maxWidth: "100%", maxHeight: "450px" }}
              />
            </div>

            {/* Display ArrowMobile image */}
            <div className="md:hidden">
              <img
                src={ArrowMobile}
                alt="Arrow Mobile"
                className="object-contain h-full"
                style={{ width: "100%", maxHeight: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Tsheet;
