import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LeaveAMessage2 = ({ header }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const descriptionRef = useRef(null);
  const resetRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_4mctjog",
          "template_7fi5bco",
          form.current,
          "pKr5g4rAla9WuxUbp"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitted(true);
      resetRef.current.click();
    } catch (error) {
      console.log(error);
    }
  };

  const form = useRef();

  return (
    <div className="bg-[#750b0b] font-primary font-semibold p-4">
      {submitted && (
        <h1 className=" text-center font-primary font-semibold text-xl">
          Submitted Successfully !!
        </h1>
      )}

      <div className="grid grid-cols-1  md:grid-cols-4 lg:mx-16 ">
        <div className="w-full  col-span-2 p-4 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.7694217713995!2d-97.1563432303865!3d32.763673098354346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7c150bddb88d%3A0xfde02fba666ba711!2sTexas%209%20Golf!5e0!3m2!1sen!2sin!4v1690220601837!5m2!1sen!2sin"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            style={{
              maxHeight: 400,
              width: "100%",
              minHeight: 300,
              border: 0,
            }}
            className="col-span-3"
          ></iframe>

          <div className="text-white space-y-2 col-span-1 justify-self-center ml-4">
            <h1 className="text-3xl uppercases font-bold w-48">FIND TEXAS 9</h1>
            <p className="text-xl">
              <a href="tel:+1-817-303-4370"> 817-303-4370</a>
            </p>
            <p className="text-xl">
              <a href="mailto:contact@texas9.com"> contact@texas9.com</a>
            </p>

            {/* <a
              style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
              href="https://goo.gl/maps/iPceoCQZ3R8JjvR58"
              target="_blank"
              rel="noopener noreferrer"
            >
             
            </a> */}
          </div>
        </div>
        <div className="ml-auto p-4 col-span-2 w-[90%]">
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="horizontal-line  ml-auto"
          >
            <h1 className="uppercase tracking-wide text-3xl text-white font-primary font-semibold pb-4 font-bold">
              {header}
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                type="text"
                placeholder="NAME"
                required
                ref={nameRef}
                name="from_name"
              />
              <input
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                type="email"
                placeholder="EMAIL"
                required
                name="from_email"
                ref={emailRef}
              />
              <input
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                type="tel"
                placeholder="PHONE"
                required
                ref={phoneRef}
                name="from_phone"
              />
              <select
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                required
                name="subject"
                placeholder="TOPIC"
                ref={subjectRef}
              >
                <option value="Topic" selected disabled hidden>
                  TOPIC
                </option>
                <option value="Job Interest">Job Interest</option>
                <option value="General Inquiry">Tee Time</option>
                <option value="Technical Support">Rates</option>
                <option value="Feedback">Memberships</option>
                <option value="Other">Events</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                className="bg-transparent outline outline-1 outline-white mb-4 w-full max-w-screen-md rounded-sm p-4  caret-black col-span-2
                  bg-white placeholder:text-black"
                name="message"
                id="description"
                required
                cols="30"
                rows="6"
                ref={descriptionRef}
                placeholder="WHAT'S ON YOUR MIND?"
              ></textarea>
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                className="uppercase px-4 py-2 ml-auto  text-white text-sm font-GBook font-semibold"
                style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
              >
                Submit
              </button>
            </div>

            <button type="reset" className="hidden" ref={resetRef}>
              Rest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveAMessage2;
