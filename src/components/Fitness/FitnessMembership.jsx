import { useState } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/gym.jpg";
import FitnessCards from "../Reusable/FitnessCards";
import FtinessImg from "../../assets/golf/fitness-header.jpg";

const FitnessMembership = () => {
  // State to manage monthly and yearly membership selection
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div>
      {/* Header component with background image */}
      <MiniHeader heading={"Fitness"} subHeading={""} image={FtinessImg} />
      <div className="p-5 md:p-16 bg-[#162649]">
        <div
          className="text-slate-100 bg-cover pt-10 font-primary font-semibold mb-10"
          style={{
            backgroundImage: `url(${RangeImg})`,
          }}
        >
          {/* Membership type selection */}
          <div className="m-auto w-full py-8 flex items-center justify-center gap-4 text-xl font-bold text-black ">
            <h1>Monthly</h1>
            <label className="switch">
              <input
                type="checkbox"
                checked={isMonthly}
                onChange={() => setIsMonthly(!isMonthly)}
              />
              <span className="slider"></span>
            </label>
            <h1>Yearly</h1>
          </div>

          {/* Display monthly or yearly membership details based on selection */}
          {!isMonthly ? (
            <div className="mx-4 grid grid-cols-1 pb-8 justify-items-center gap-y-8">
              <div className="card-fitness font-primary font-semibold">
                <div className="content-membership">
                  <div className="text-5xl font-bold font-primary font-semibold mb-8 text-white">
                    Monthly Membership
                  </div>
                  {/* Description of monthly membership */}
                  <div className="description text-justify text-white ">
                    Unlock your fitness goals with our comprehensive fitness
                    memberships, offering access to state-of-the-art facilities,
                    machines, and professional guidance to help you achieve your
                    health and wellness aspirations.
                  </div>
                  {/* Monthly membership pricing */}
                  <div className="flex items-center gap-x-4 justify-center my-4 ">
                    <div className="text-xl font-semibold">
                      Monthly Individual{" "}
                    </div>
                    <div className="text-4xl font-bold ">$40</div>
                  </div>
                  <div className="flex items-center gap-x-4 justify-center my-4 ">
                    <div className="text-xl font-semibold">
                      Monthly Additional Family
                      <span className="text-xs block text-left">
                        * Up to 4 additional family members{" "}
                      </span>
                    </div>
                    <div className="text-4xl font-bold tracking-wide">
                      $20
                      <span className="text-xs block text-center">p/p</span>
                    </div>
                  </div>
                </div>
                {/* <button className="btn-custom-rate">Buy now</button> */}
              </div>
            </div>
          ) : (
            <div className="mx-4 grid grid-cols-1 pb-8 justify-items-center gap-y-8">
              <div className="card-fitness font-primary font-semibold ">
                <div className="content-membership">
                  <div className="text-5xl font-bold font-primary font-semibold mb-8 text-white">
                    Yearly Membership
                  </div>
                  {/* Description of yearly membership */}
                  <div className="description text-justify ">
                    Unlock your fitness goals with our comprehensive fitness
                    memberships, offering access to state-of-the-art facilities,
                    diverse workout options, and professional guidance to help
                    you achieve your health and wellness aspirations.
                  </div>
                  {/* Yearly membership pricing */}
                  <div className="flex items-center gap-x-4 justify-center my-4 ">
                    <div className="text-xl font-semibold">
                      Yearly Individual{" "}
                    </div>
                    <div className="text-4xl font-bold ">$432</div>
                  </div>
                  <div className="flex items-center gap-x-4 justify-center my-4 ">
                    <div className="text-xl font-semibold">
                      Yearly Additional Family
                      <span className="text-xs block text-left">
                        * Up to 4 additional family members{" "}
                      </span>
                    </div>
                    <div className="text-4xl font-bold tracking-wide">
                      $216
                      <span className="text-xs block text-center">p/p</span>
                    </div>
                  </div>
                </div>
                {/* <button className="btn-custom-rate">Buy now</button> */}
              </div>
            </div>
          )}
        </div>
        {/* Render FitnessCards component */}
        <FitnessCards />
      </div>
      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default FitnessMembership;
