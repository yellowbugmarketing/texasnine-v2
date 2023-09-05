// Import necessary components and assets for the Services page.
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/Range.jpg";
import MassageImg from "../../assets/golf/massage-therapy.jpg";
import TrainingImg from "../../assets/golf/strength-training.jpg";
import AllCards from "../Reusable/AllCards";
import MainCard from "../Reusable/MainCard";
import FtinessImg from "../../assets/golf/fitness-header.jpg";
import PersonalImg from "../../assets/golf/personal-training.jpeg";

// Define the Services functional component.
const Services = () => {
  return (
    <div>
      {/* Render the MiniHeader component with a heading, subheading, and image. */}
      <MiniHeader heading={"Services"} subHeading={""} image={FtinessImg} />

      {/* Create a container with a background image for the services section. */}
      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          {/* Render MainCard components for different services. */}
          <MainCard
            Img={PersonalImg}
            header={"Personal Training"}
            body={
              "Schedule an opportunity to talk to our physical trainer. Jake is a trainer, coach, group fitness instructor and massage therapist of 20+ years. A veteran of the US Navy, he began his fitness journey helping fellow crew members on a ballistic missile submarine while underway during patrols. After his time in the service, it was a seamless transition to becoming a fitness professional and health advocate. His perspective about health and our body is that it is a gift and should not be taken for granted. He believes balance, functionality, mobility, and strength are paramount to any fitness regimen. So whatever your health and fitness goals, let Jake help you to create and execute a plan to achieve them"
            }
            button={"LEARN MORE"}
            placement={"top"}
          />
          <MainCard
            Img={TrainingImg}
            header={"MOBILITY AND STRENGTH TRAINING"}
            body={
              "Schedule an opportunity to talk to our physical trainer. MORE INFORMATION COMING SOON."
            }
            button={"LEARN MORE"}
          />

          <MainCard
            Img={RangeImg}
            header={"YOGA"}
            body={
              "Maddie Wildman is the resident yoga instructor at Texas 9. Her teaching philosophy centers around inclusivity and accessibility, believing that yoga is for everyone, regardless of age or skill level. Maddie’s classes cater to a diverse range of individuals, from seniors seeking gentle movement to advanced practitioners looking to deepen their practice. The recurring Yoga times will be every Tuesday at 6pm!"
            }
            button={"LEARN MORE"}
          />
          <MainCard
            Img={MassageImg}
            header={"MASSAGE THERAPY"}
            body={
              "Schedule an opportunity to talk to our massage therapist. MORE INFORMATION COMING SOON."
            }
            button={"LEARN MORE"}
          />
        </div>
        
        {/* Render the AllCards component. */}
        <AllCards />
      </div>

      {/* Render the Footer component. */}
      <Footer />
    </div>
  );
};

// Export the Services component as the default export.
export default Services;
