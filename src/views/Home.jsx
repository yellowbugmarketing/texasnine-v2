// Import React library to define React components
import React from "react";

// Import the LeaveAMessage component from the specified location
import LeaveAMessage from "../components/Home/LeaveAMessage";

// Import the Header component from the specified location
import Header from "../layout/MainLayout/Header";

// Import the Footer component from the specified location
import Footer from "../reusable/Footer";

// Import the HomeCards component from the specified location
import HomeCards from "../components/Reusable/HomeCards";

// Import the HomeDiv2 component from the specified location
import HomeDiv2 from "../components/Reusable/HomeDiv2";

// Define the Home component as a functional component
const Home = () => {
  // Render the following JSX elements
  return (
    <>
      {/* Render the Header component */}
      <Header />

      {/* Render the HomeCards component */}
      <HomeCards />

      {/* Render the HomeDiv2 component */}
      <HomeDiv2 />

      {/* Render the LeaveAMessage component with a specified header prop */}
      <LeaveAMessage header={"HAVE QUESTIONS?"} />

      {/* Render the Footer component */}
      <Footer />
    </>
  );
};

// Export the Home component as the default export of this module
export default Home;
