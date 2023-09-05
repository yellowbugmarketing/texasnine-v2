import React from "react";
// Importing images for golf cards
import GolfTeeTimes from "../../assets/golf/golf-tee-times.jpeg";
import GolfMemberships from "../../assets/golf/golf-memberships.jpeg";
import GolfRates from "../../assets/golf/golf-rates.jpeg";
import GolfLesson from "../../assets/golf/golf-lesson.jpeg";
import { Link } from "react-router-dom";

const AllCards = () => {
  return (
    // Container for a grid of golf-related cards
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-16  font-primary font-semibold gap-8 mt-10">
      {/* Link to Golf Rates page */}
      <Link to="/golf/rates">
        {/* Golf Rates Card */}
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfRates})`,
          }}
        >
          {/* Title for Golf Rates Card */}
          <h1 className="text-center text-white pt-4 text-3xl font-semibold">
            RATES
          </h1>
        </div>
      </Link>
      {/* Link to Golf Memberships page */}
      <Link to="/golf/memberships">
        {/* Golf Memberships Card */}
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfMemberships})`,
          }}
        >
          {/* Title for Golf Memberships Card */}
          <h1 className="text-center text-white pt-4 text-3xl font-semibold">
            MEMBERSHIPS
          </h1>
        </div>
      </Link>
      {/* Link to Golf Lessons page */}
      <Link to="/golf/lessons">
        {/* Golf Lessons Card */}
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfLesson})`,
          }}
        >
          {/* Title for Golf Lessons Card */}
          <h1 className="text-center text-white pt-4 text-3xl font-semibold">
            LESSONS
          </h1>
        </div>
      </Link>
      {/* Link to Tee Times page */}
      <Link to="/tee-times">
        {/* Golf Tee Times Card */}
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfTeeTimes})`,
          }}
        >
          {/* Title for Golf Tee Times Card */}
          <h1 className="text-center text-white pt-4 text-3xl font-semibold">
            TEE TIMES
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default AllCards;
