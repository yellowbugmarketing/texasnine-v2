import React from "react";
import GolfMemberships from "../../assets/golf/golf-memberships.jpeg";
import GolfRates from "../../assets/golf/golf-rates.jpeg";
import GolfLesson from "../../assets/golf/golf-lesson.jpeg";
import { Link } from "react-router-dom";
const FitnessCards = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-16  font-primary font-semibold gap-8 ">
      <Link to="/golf/rates">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfRates})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold pt-4 text-white">
            AMENITIES
          </h1>
        </div>
      </Link>
      <Link to="/fitness/services">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfMemberships})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold pt-4 text-white">
            SERVICES
          </h1>
        </div>
      </Link>
      <Link to="/fitness/fitness-membership">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${GolfLesson})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold pt-4 text-white">
            FITNESS MEMBERSHIPS
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default FitnessCards;
