// Import necessary dependencies and components from React and other files
import React, { useState } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import MembershipHeader from ".././../assets/golf/membership-header.png";
import MembershipFitness from ".././../assets/golf/membership-fitness.png";
import MembershipRange from ".././../assets/golf/membership-range.png";
// ... (other import statements)

// Define a functional component named Membership
const Membership = () => {
  // Define a state variable 'isMonthly' using the 'useState' hook
  const [isMonthly, setIsMonthly] = useState(false);

  // Render the component's JSX structure
  return (
    <div>
      {/* Render the MiniHeader component with a heading and image */}
      <MiniHeader heading={"Memberships"} image={MembershipHeader} />

      {/* Render a section for yearly memberships */}
      <div className="text-center my-4 p-1">
        <h2 className="text-violet text-3xl lg:text-5xl font-DinCondensed  mb-2 uppercase">
          YEARLY MEMBERSHIPS
        </h2>
      </div>

      {/* Create a grid layout for membership details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-violet   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        {/* Render details for TEXAS 9 MEMBER */}
        <div className="col-span-2 lg:col-span-1 p-4">
          {/* Render a flex container */}
          <div className="flex flex-col items-center"></div>
          
          {/* Render a heading for TEXAS 9 MEMBER */}
          <p className="tracking-wide text-xl font-primary  font-semibold my-3 text-start">
            <h1 className="text-violet font-bold text-4xl text-center my-4 font-DinCondensed">
              TEXAS 9 MEMBER
            </h1>
            {/* Render details about Texas 9 Member */}
            <div className="px-2 text">
              <p className="text-center  my-4">
                Texas 9 Members receive priority access to the course and
                unlimited access to the driving range, full access to the gym & 15%
                off yoga.
              </p>

              {/* Render a list of membership options */}
              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                  INDIVIDUAL - $1,069
                  <br />
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl  font-semibold">
                  ADDITIONAL FAMILY - $540/PERSON <br />{" "}
                  <span className="text-lg font-normal ml-6 lg:ml-10">
                    * up to 4 additional family members
                  </span>
                </li>
              </ul>
            </div>
          </p>
        </div>

        {/* Render details for RANGE MEMBER */}
        <div className="col-span-2 lg:col-span-1 p-4">
          {/* Render a heading for RANGE MEMBER */}
          <p className="tracking-wide text-xl font-primary  font-semibold my-3 text-start">
            <h1 className="text-violet font-bold text-4xl text-center my-4 font-DinCondensed">
              RANGE MEMBER
            </h1>
            {/* Render details about Range Member */}
            <div className="px-2 text">
              <p className="text-center  my-4 h-20">
                Texas 9 Range Members receive unlimited access to the driving
                range anytime day or night to perfect their swing.
              </p>

              {/* Render a list of membership options */}
              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                  INDIVIDUAL - $756
                  <br />
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl  font-semibold">
                  ADDITIONAL FAMILY - $324/PERSON <br />{" "}
                  <span className="text-lg font-normal ml-6 lg:ml-10">
                    * up to 4 additional family members
                  </span>
                  <br />
                </li>
              </ul>
            </div>
          </p>
        </div>
        {/* Display a message promoting club house visit */}
        <p className="text-violet tracking-wide col-span-2 text-4xl font-DinCondensed font-semibold my-3 text-center">
          VISIT THE CLUB HOUSE TO BECOME A MEMBER!
        </p>
      </div>

      {/* Display images related to memberships */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:mx-16">
          {/* Render images for MembershipFitness and MembershipRange */}
          <img
            src={MembershipFitness}
            alt="Event 1"
            className="object-fill h-full"
            style={{ width: "100%", maxHeight: "450px" }}
          />
          <img
            src={MembershipRange}
            alt="Event 2"
            className="object-fill h-full"
            style={{ width: "100%", maxHeight: "450px" }}
          />
        </div>
      </div>

      {/* Render a section for monthly memberships */}
      <div className="text-center my-4 p-1">
        <h2 className="text-maroon text-3xl lg:text-5xl  font-DinCondensed mb-2 uppercase">
          MONTHLY MEMBERSHIPS
        </h2>
      </div>

      {/* Create a grid layout for monthly membership details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        {/* Render details for TEXAS 9 MEMBER */}
        <div className="col-span-2 lg:col-span-1 p-4">
          {/* ... (details for TEXAS 9 MEMBER) */}
        </div>

        {/* Render details for RANGE MEMBER */}
        <div className="col-span-2 lg:col-span-1 p-4">
          {/* ... (details for RANGE MEMBER) */}
        </div>
        {/* Display a message promoting yearly memberships */}
        <p className="text-maroon tracking-wide col-span-2 text-4xl font-DinCondensed   font-semibold my-3 text-center">
          SAVE MORE WITH A YEARLY MEMBERSHIP!
        </p>
      </div>

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

// Export the Membership component as the default export
export default Membership;
