// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Carousel } from "react-responsive-carousel";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { LiaGolfBallSolid } from "react-icons/lia";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import MapCourse from "../assets/golf/mapcourse.png";
import Golf1 from "../assets/golf/golf-1.png";
import Golf2 from "../assets/golf/golf-2.png";
import Golf3 from "../assets/golf/golf-3.png";
import GolfBallPattern from "../assets/golf/golfballpattern.png";

// Define the Golf component
const Golf = () => {
  return (
    <>
      {/* Render the MiniHeader component */}
      <MiniHeader heading={"Golf"} subHeading={""} />
      <div className="grid grid-cols-1  md:grid-cols-12 pt-6 w-full max-w-[90vw] mx-auto px-4">
        <div className="col-span-12 mb-2 ">
          {/* Golf course description */}
          <div className="text-justify font-primary font-semibold">
            Nestled amidst rolling hills and picturesque landscapes, the quaint
            9-hole golf course offers a delightful escape for both novice and
            experienced golfers alike...
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Display an image of the golf course map */}
          <img
            src={MapCourse}
            alt="Golf Course"
            className="object-fill col-span-8"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="col-span-4 flex  flex-col items-center justify-around space-y-4">
            {/* Buttons for various golf-related actions */}
            <div>
              <button className="uppercase outline outline-1 px-2 text-[#7da33f] text-xl tracking-wider outline-[#7da33f]">
                <Link
                  to="/tee-times"
                  className="block w-full h-full font-GBook"
                >
                  Book Your Tee Time
                </Link>
              </button>
            </div>
            <div>
              <button className="uppercase outline outline-1 px-2 text-maroon text-xl tracking-wider outline-[#791214]">
                <Link
                  to="/tee-times"
                  className="block w-full h-full font-GBook"
                >
                  PLAY MORE SAVE MORE WITH A MEMBERSHIP!
                </Link>
              </button>
            </div>
            <div>
              <button className="uppercase outline outline-1 px-2 text-violet text-xl tracking-wider outline-[#172649]">
                <Link
                  to="/tee-times"
                  className="block w-full h-full font-GBook"
                >
                  BOOK A PRIVATE LESSON
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          {/* Golf etiquette section */}
          <div
            className="bg-pattern grid grid-col-1  md:grid-cols-10 relative bg-contain md:bg-cover opacity-80"
            style={{
              marginTop: "10px",
            }}
          >
            <img
              src={GolfBallPattern}
              alt="balls"
              className="absolute -z-10 -left-20"
            />
            <h1 className="absolute text-xl md:text-3xl font-bold left-10">
              KNOW THE ETIQUETTE
            </h1>
            <ul className="list-disc md:col-start-2 md:col-span-6 pt-10 mx-auto px-6 place-self-center font-primary font-semibold">
              {/* List of golf etiquette rules */}
              <li>show up early to take advantage of your tee time </li>
              <li>obey the cart rules & stay on the path </li>
              <li>warm up with three balls</li>
              <li>don't talk & stand away </li>
              <li>only look tor a lost ball for three min </li>
              <li>be respectful of time and play at an appropriate pace </li>
              <li>be prepared to play when its your time to go </li>
              <li>stay off your phone as much as you can</li>
              <li>yell FORE when a ball is going toward another person </li>
              <li>fix your ball mark after you hit when on the green </li>
            </ul>

            <div className="md:col-span-3 py-4 flex flex-col lg:flex-row gap-4 mx-auto">
              {/* Display images related to golf */}
              <img
                src={Golf1}
                alt="Golf Course"
                className="object-fill"
                style={{
                  width: "80%",
                  height: "auto",
                  maxHeight: "420px",
                  marginRight: "30px",
                }}
              />
              <img
                src={Golf2}
                alt="Golf Course"
                className="object-fill"
                style={{
                  width: "80%",
                  height: "auto",
                  maxHeight: "420px",
                  marginRight: "30px",
                }}
              />

              <img
                src={Golf3}
                alt="Golf Course"
                className="object-fill"
                style={{ width: "80%", height: "auto", maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Render the LeaveAMessage and Footer components */}
      <LeaveAMessage header={"HAVE QUESTIONS?"} />
      <Footer />
    </>
  );
};

export default Golf;
