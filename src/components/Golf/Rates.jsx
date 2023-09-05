// Import necessary dependencies from React and other modules
import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import Golfer from "../../assets/golf/rates-golfer.png";
import DrivingRange from "../../assets/golf/rates-drivingrange.png";
import RatesHeader from "../../assets/golf/rates-header.png";
import React from "react"; // Duplicate import of React, should be removed
import "../../index.css";
import { Link, useLocation } from "react-router-dom";

// Define the Rates component
const Rates = () => {
  return (
    <>
      {/* MiniHeader component for displaying header */}
      <MiniHeader heading={"Rates"} subHeading={""} image={RatesHeader} />

      {/* Main content grid */}
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 py-4 ">
        <div className="col-span-1 md:col-span-5">
          {/* Golf course information */}
          <div className="border-2 border-[#7da33f] border-l-0 py-6 mr-8 md:mr-0">
            <div className="px-8 mx-auto text-center lg:w-2/3">
              <h1 className="text-[#7da33f] font-bold text-2xl font-DinCondensed text-center">
                9 HOLE EXECUTIVE COURSE
              </h1>
              <p className="text-left  my-3 font-primary  font-semibold">
                Enjoy a quick game of golf on-foot, or upgrade your golfing
                adventure to include a cart full of modern comforts to get you
                around.
              </p>

              {/* Golf rates */}
              <ul className="list-disc list-inside font-primary  font-semibold">
                <li className="text-xl uppercase font-semibold">
                  Monday - Thursday
                  <br />
                  <span className="ml-7">7 Am - Sunset</span>
                  <ul className="list-disc list-inside pl-4">
                    <li className="lowercase font-thin text-lg">
                      course - $10/<span className="text-sm">person</span>
                    </li>
                    <li className="lowercase font-thin text-lg">
                      golf cart - $18/<span className="text-sm">person</span>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* Golf rates for Friday - Sunday */}
              <ul className="list-disc list-inside mt-4 font-primary  font-semibold">
                <li className="text-xl uppercase font-semibold">
                  Friday - Sunday
                  <br />
                  <span className="ml-7">7 Am - Sunset</span>
                  <ul className="list-disc list-inside pl-4">
                    <li className="lowercase font-thin text-lg">
                      course - $10/<span className="text-sm">person</span>
                    </li>
                    <li className="lowercase font-thin text-lg">
                      golf cart - $18/
                      <span className="text-sm font-">person</span>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* Button to book tee time */}
              <button className="uppercase outline  outline-1 px-2 text-[#7da33f] w-full text-xl my-3 tracking-wider outline-[#7da33f] font-GBook">
                <Link to={"/tee-times"}>BOOK YOUR TEE TIME</Link>
              </button>
            </div>
          </div>

          {/* Image of the golf course */}
          <img
            src={Golfer}
            alt="Golf Course"
            className="object-contain lg:pl-10 lg:pt-8 h-40 lg:h-[300px]"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-span-1 md:col-span-7">
          {/* Image of the driving range */}
          <img
            src={DrivingRange}
            alt="Golf Course"
            className="object-contain object-bottom mb-8 h-48 lg:h-[380px]"
            style={{ width: "100%" }}
          />

          {/* Information about the driving range */}
          <div className=" border-4 gap-4  mb-8 border-red-800   lg:max-w-[90vw] ml-8 mr-0  border-r-0 grid place-items-center ">
            <div className="p-4">
              <div className="tracking-wide text-xl font-primary  font-semibold my-3 text-justify">
                <h1 className="text-maroon font-bold text-4xl font-DinCondensed text-center my-4">
                  DRIVING RANGE
                </h1>
                <div className="px-4 lg:px-8 grid grid-cols-2">
                  <p className="text-left text-lg  my-4 mr-2">
                    Want to perfect your swing? Choose your bucket to practice
                    anytime of day even after sunset with our lighted driving
                    range.
                  </p>

                  {/* Driving range rates */}
                  <ul className="list-disc list-inside ">
                    <li className="text-xl uppercase font-semibold">
                      Monday - Sunday
                      <br />
                      <span className="ml-7">7 Am - 9 Pm</span>
                      <ul className="list-disc list-inside pl-4">
                        <li className="lowercase font-thin text-lg">
                          small bucket - $10/
                          <span className="text-sm">person</span>
                        </li>
                        <li className="lowercase font-thin text-lg">
                          medium bucket - $12/
                          <span className="text-sm">person</span>
                        </li>
                        <li className="lowercase font-thin text-lg">
                          large bucket - $15/
                          <span className="text-sm">person</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Button to learn about memberships */}
            <button className="uppercase outline  outline-1 px-2 text-[#791214] w-fit mx-auto text-2xl my-2 tracking-wider outline-[#791214] max-w-xs font-GBook">
              <Link to={"/golf/memberships"}>
                PLAY MORE SAVE MORE WITH A MEMBERSHIP
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Rates;
