// import MiniHeader from "../layout/MainLayout/MiniHeader";
// import Footer from "../reusable/Footer";
// import LeaveAMessage from "../components/Home/LeaveAMessage";
import Smallgallery1 from "../../assets/golf/smallgallery1.png";
import Smallgallery2 from "../../assets/golf/smallgallery2.png";
import Smallgallery3 from "../../assets/golf/smallgallery3.png";
import Smallgallery4 from "../../assets/golf/smallgallery4.png";
import Review from "../../assets/golf/review.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Carousel } from "react-responsive-carousel";
// import LogoImg from "../assets/logos/Texas 9 Golf.png";
// import AboutHeader from "../assets/golf/about-header.jpg";
const HomeDiv2 = () => {
  const reviews = [
    {
      id: 1,
      text: `<b style="font-size:22px; font-family:'Din Condensed'">NINE HOLE LITTLE PARADISE</b>.\nExcellent course to work on your short game. Staff was friendlier than any big course I have gone to!`,
      author: "HECTOR GARZA",
    },
    // Add more reviews here
    {
      id: 2,
      text: `Hospitality is everything and we immediately felt welcomed! The course was awesome and they even have brand <b style="font-size:22px; font-family:'Din Condensed'">NEW EPIC GOLF CARTS</b> that are a must.`,
      author: "ARMANDO AGUILAR",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      <div className="  py-4  font-primary font-semibold first-letter: ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-[#7DA33F] px-8 py-4 flex flex-col items-center text-white col-span-1 lg:col-span-1">
            <h1 className="uppercase tracking-wide text-4xl lg:text-6xl font-DinCondensed font-bold text-center mt-6">
              GET YOUR <br className="hidden lg:block" />
              TEE TIME!
            </h1>
            <p className="tracking-wide text-lg lg:text-xl font-primary font-semibold text-center  my-2 mx-8 lg:mx-14">
              Minimize the wait and schedule your next visit on our nine hole
              course.
            </p>
            <Link
              to="/tee-times"
              className=" p-2 px-8 text-2xl bg-[#7DA33F]  hover:text-gray-800 border-2 border-white font-GBook"
            >
              BOOK NOW
            </Link>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 p-4 border-red-800 border-r-0 -pr">
            <div className="flex lg:hidden bg-white  flex-col justify-between md:pr-20 relative col-span-2">
              <p className=" tracking-wide text-xl font-primary  font-semibold text-left lg:text-justify">
                Hailed as one of the best executive golf courses in DFW, our
                course was designed by Steven D. Plumber, ASGCA, and opened in
                1999. The course was created to be a public course, filling a
                niche in DFW so the greater community can have better access to
                the benefits of golf. Formerly known as Texas Golf Center, the
                course came under new management in 2023 with an explicit
                interest in adding new amenities and reinforcing the best
                aspects of the course.
              </p>
              <p className="tracking-wide text-4xl lg:text-5xl -bottom-2  relative  lg:absolute font-DinCondensed text-left font-bold   text-red-800">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p>
            </div>
            <div className="h-full w-full col-span-1">
              <Carousel
                autoPlay
                infiniteLoop
                swipeable={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={4000}
                stopOnHover={false}
                className="carousel"
                style={{ maxHeight: "100%", maxWidth: "60%", margin: "0 auto" }}
              >
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery3})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery4})`,
                  }}
                ></div>
              </Carousel>
            </div>

            <div className="hidden lg:flex bg-white  flex-col justify-between md:pr-20 relative col-span-2">
              <p className=" tracking-wide text-xl font-primary  font-semibold text-left lg:text-justify">
                Hailed as one of the best executive golf courses in DFW, our
                course was designed by Steven D. Plumber, ASGCA, and opened in
                1999. The course was created to be a public course, filling a
                niche in DFW so the greater community can have better access to
                the benefits of golf. Formerly known as Texas Golf Center, the
                course came under new management in 2023 with an explicit
                interest in adding new amenities and reinforcing the best
                aspects of the course.
              </p>
              <p className="tracking-wide text-4xl lg:text-5xl -bottom-2  relative  lg:absolute font-DinCondensed text-left font-bold   text-red-800">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page py-4">
        <section
          className="hero-section lg:pl-16"
          style={{
            backgroundImage: `url(${Review})`,
          }}
        >
          <div className="block md:hidden hero-content w-full">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              interval={10000}
              onChange={setCurrentReview}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="review-slide text-center lg:text-justify font-primary font-semibold"
                >
                  <p dangerouslySetInnerHTML={{ __html: review.text }}></p>
                  <p className="text-right font-DinCondensed font-bold ">
                    - {review.author}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="hidden hero-content md:flex w-[70vw] mr-auto">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-slide text-center lg:text-justify font-primary font-semibold"
              >
                <p dangerouslySetInnerHTML={{ __html: review.text }}></p>
                <p className="text-right font-DinCondensed font-bold">
                  - {review.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeDiv2;
