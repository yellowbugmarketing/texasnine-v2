// Importing necessary components
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

// Golf Mobility functional component
const GolfMobility = () => {
  return (
    <div>
      {/* MiniHeader component with heading */}
      <MiniHeader
        heading={"Golf Mobility & Strength Training"}
        subHeading={""}
      />

      {/* Main content */}
      <div className="bg-contain bg-no-repeat bg-center bg-lime-950 text-slate-100 pt-6">
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
          {/* Left column with image */}
          <div className="sticky top-0">
            <img
              src="https://cdn.cybergolf.com/images/1407/DesertWillow_1022_223.jpg"
              alt="GolfMobility"
            />
          </div>

          {/* Right column with text content */}
          <div className="">
            <h1 className="uppercase tracking-wide text-2xl font-primary font-semibold font-bold text-green-600 ">
              Golf Mobility & Strength Training
            </h1>
            <h1 className="tracking-wide text-md font-primary font-semibold  my-3 ">
              Elevate your golf performance with our dynamic Golf Mobility &
              Strength Training program, designed to enhance flexibility, build
              strength, and optimize your body's potential for a powerful and
              precise swing.
            </h1>
            <h1 className="uppercase tracking-wide my-3 text-2xl font-primary font-semibold font-bold text-green-600">
              BENEFIT
            </h1>
            <h1 className=" my-4 tracking-wide text-xl font-primary font-semibold font-bold ">
              Improved Golf Swing Mechanics | Increased Power and Distance |
              Enhanced Stability and Balance
            </h1>

            {/* Section with additional information */}
            <div className="flex flex-col justify-between bg-lime-800 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-100 font-bold mb-3">
                  A typical Golf Mobility session
                </h4>
                <p className="text-gray-100 text-sm">
                  Experience a revitalizing Golf Mobility session designed to
                  improve your flexibility, range of motion, and overall
                  physical performance on the golf course.
                </p>
              
                {/* <p className="text-gray-100 text-sm">
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu
                  iudicari, sed ut alterum.
                </p>
                <p className="text-gray-100 text-sm">
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu
                  iudicari, sed ut alterum.
                </p> */}
              </div>
          
              {/* <div>
                <div className="flex items-center justify-between text-gray-800">
                  <p className="text-sm dark:text-gray-100">March 28, 2020</p>

                  <div className="border  bg-greens border-gray-300 h-8 w-24 mb-4 md:mb-0 rounded-full flex items-center justify-center">
                    <div className="flex items-center">
                      <div className="h-1 w-1 rounded-full bg-greens mr-1" />
                      <span className="text-xs font-normal text-white">
                        Book
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Exporting the GolfMobility component
export default GolfMobility;
