// Import the MiniHeader component from the specified path.
import MiniHeader from "../../layout/MainLayout/MiniHeader";

// Import the Footer component from the specified path.
import Footer from "../../reusable/Footer";

// Define a functional component called 'Yoga'.
const Yoga = () => {
  return (
    <div>
      {/* Render the MiniHeader component with a heading prop 'Yoga' and an empty subHeading prop. */}
      <MiniHeader heading={"Yoga"} subHeading={""} />

      {/* Create a container div with specific styling. */}
      <div className="bg-contain bg-no-repeat bg-center bg-lime-950 text-slate-100 pt-6">
        {/* Create a grid layout with two columns (responsive) and spacing. */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
          {/* Render the left column with an image. */}
          <div className="">
            <img
              src="https://cdn.yogajournal.com/wp-content/uploads/2022/03/350-yoga-journal-2022-C-andrew-clark-BC8I1025-1-1.jpg?width=1200"
              alt="hyoga"
            />
          </div>

          {/* Render the right column with content. */}
          <div className="">
            {/* Render a title for the Yoga section. */}
            <h1 className="uppercase tracking-wide text-2xl font-primary font-semibold font-bold text-green-600 ">
              Yoga
            </h1>

            {/* Render a description of the Yoga section. */}
            <h1 className="tracking-wide text-md font-primary font-semibold  my-3 ">
              Discover inner peace and enhance your physical and mental
              well-being through our transformative Yoga classes, fostering
              balance, flexibility, and mindfulness for a harmonious and
              rejuvenating experience.
            </h1>

            {/* Render a title for the benefits of Yoga. */}
            <h1 className="uppercase tracking-wide my-3 text-2xl font-primary font-semibold font-bold text-green-600">
              BENEFIT
            </h1>

            {/* Render a list of benefits of Yoga. */}
            <h1 className=" my-4 tracking-wide text-xl font-primary font-semibold font-bold ">
              Flexibility | Stress reduction | Mental & Emotional Well Being
            </h1>

            {/* Create a container div with specific styling for additional information. */}
            <div className="flex flex-col justify-between bg-lime-800 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4">
              {/* Render a title for the typical Yoga session. */}
              <div>
                <h4 className="text-gray-100 font-bold mb-3">
                  A typical Yoga session
                </h4>

                {/* Render a description of a typical Yoga session. */}
                <p className="text-gray-100 text-sm">
                  Embark on a rejuvenating journey of self-discovery and
                  holistic well-being with our transformative Yoga session,
                  combining soothing movements, mindful breathing, and
                  relaxation techniques for a harmonious and revitalizing
                  experience.
                </p>
                
                {/* Additional comments are commented out. */}
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
              
              {/* Additional comments are commented out. */}
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

      {/* Render the Footer component. */}
      <Footer />
    </div>
  );
};

// Export the Yoga component as the default export.
export default Yoga;
