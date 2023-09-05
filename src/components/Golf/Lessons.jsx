import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import { Carousel } from "react-responsive-carousel";
import Lessons1 from "../../assets/golf/lessons1.png";
import Lessons2 from "../../assets/golf/lessons2.png";
import Lessons3 from "../../assets/golf/lessons3.png";
import Instructor from "../../assets/golf/instructor.png";
import React from "react";
import { HashLink } from "react-router-hash-link";

const Lessons = () => {
  return (
    <>
      {/* MiniHeader component */}
      <MiniHeader heading={"Lessons"} subHeading={""} />
      
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-10  pt-6  lg:pr-20 pb-6 font-primary font-semibold">
        
        {/* Left column */}
        <div className="md:col-span-4 md:order-last mb-2 pr-4  pl-4 ">
          <div className="block md:hidden pl-4 lg:pl-20">
            {/* Introduction text */}
            <p className="text-justify ">
              Tee up for success with golf lesson Whether you're new to the game
              or looking to refine your skills, our experienced instructors are
              here to elevate your swing. Join us for engaging lessons that
              cover everything from putting to driving, all set against the
              backdrop of our scenic course. With our limited-time offer, now is
              the perfect time to take your golf game to the next level. Don't
              miss out on this opportunity to improve your game and enjoy the
              greens like never before!
            </p>
            
            {/* Image carousel */}
            <div className="py-4 pr-4 lg:pr-0 ">
              <Carousel
                autoPlay
                infiniteLoop
                swipeable={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={10000}
                stopOnHover={false}
                className="carousel"
                style={{ maxHeight: "100%", maxWidth: "60%", margin: "0 auto" }}
              >
                {/* Carousel images */}
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Lessons1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Lessons2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Lessons3})`,
                  }}
                ></div>
              </Carousel>
            </div>
          </div>
          
          {/* Instructor information */}
          <div className="border-4  gap-4 p-5 border-[#7da33f]">
            <h1 className="text-[#7da33f] font-bold text-4xl font-DinCondensed  text-center">
              LEARN FROM A PRO
            </h1>
            <div className="px-2">
              <p className="text-left  my-4">
                Shannon Kneisler is a LPGA Instructor with over fifteen years of
                experience. Shannon has trained players around the world, and
                has been featured on the LPGA Tour, Golf Channel, and Fox
                Sports. Shannon's focus is helping golfers find their swing,
                centering on fundamentals that work with player's bodies, not
                against their natural form. Shannon brought her talents to Texas
                9 two years ago, providing instruction to members, guests, and
                top amateur players in the Texas and Oklahoma regions.
              </p>

              {/* Instructor image */}
              <img
                src={Instructor}
                alt="Instructor"
                className="object-fill my-4"
                style={{ width: "100%", height: "auto", maxHeight: "350px" }}
              />

              {/* Contact button */}
              <button className="uppercase outline outline-2 px-2 text-[#7da33f] w-full text-xl my-6 mb-0 tracking-wider  outline-[#7da33f] font-GBook ">
                <HashLink to="/#contact" className="block w-full h-full">
                  CONTACT US
                </HashLink>
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-8">
          <div className="hidden md:block pl-4 lg:pl-20">
            {/* Additional text */}
            <p className="text-justify ">
              Discover the ultimate full-service fitness center that's all about
              you! Get ready to achieve your fitness dreams with top-notch gym
              equipment, fun exercise classes, and personalized training plans.
              And guess what? We're more than just a gym! Treat yourself to
              relaxing spa services, learn about healthy eating with expert
              advice, and find your zen in our calming relaxation areas. Join a
              friendly community of fitness pros and friends who will cheer you
              on every step of the way. Your wellness adventure starts here -
              come on over and let's make healthy happen, together!
            </p>
            
            {/* Image carousel */}
            <div className="py-4 pr-4 lg:pr-0 ">
              <Carousel
                autoPlay
                infiniteLoop
                swipeable={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={10000}
                stopOnHover={false}
                className="carousel"
                style={{ maxHeight: "100%", maxWidth: "60%", margin: "0 auto" }}
              >
                {/* Carousel images */}
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Lessons1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Lessons2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Lessons3})`,
                  }}
                ></div>
              </Carousel>
            </div>
          </div>
          
          {/* Announcement */}
          <div
            className="bg-red-800 p-6 text-white relative justify-items-center"
            style={{ marginTop: "20px" }}
          >
            <h1 className="text-xl md:text-5xl  font-DinCondensed font-bold">
              KEEP AN EYE OUT FOR MORE LESSONS AND <br />
              COLLABORATIONS COMING TO TEXAS 9 SOON!
            </h1>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Lessons;

