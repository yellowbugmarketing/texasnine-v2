// Import necessary components and functions from React Router and your project
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Import the 'lazy' and 'Loadable' functions for code splitting
import { lazy } from "react";
import Loadable from "../Helpers/Loadable";

// Import various views and components used in the routes
import Contact from "../views/Contact";
import AboutView from "../views/AboutView";
import Rates from "../components/Golf/Rates";
import PersonalTraining from "../components/Fitness/PersonalTraining";
import MassageTherapy from "../components/Fitness/MassageTherapy";
import GolfMobility from "../components/Fitness/GolfMobility";
import Yoga from "../components/Fitness/Yoga";
import Memberships from "../components/Golf/Memberships";
import Lessons from "../components/Golf/Lessons";
import Fitness from "../views/Fitness";
import FitnessMembership from "../components/Fitness/FitnessMembership";
import EventView from "../views/EventView";
import Golf from "../views/Golf";
import Tsheet from "../views/Tsheet";
import Services from "../components/Fitness/Services";
import Community from "../views/Community";

// Lazily load the 'Home' component for code splitting
const Home = Loadable(lazy(() => import("../views/Home")));

export default function TheRoutes() {
  return (
    // Define the routes using React Router's 'Routes' and 'Route' components
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Define the main routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tee-times" element={<Tsheet />} />
        
        {/* Define a nested route for golf-related pages */}
        <Route path="/golf">
          <Route exact path="/golf" element={<Golf />} />
          <Route exact path="/golf/rates" element={<Rates />} />
          <Route exact path="/golf/memberships" element={<Memberships />} />
          <Route exact path="/golf/lessons" element={<Lessons />} />
        </Route>
        
        {/* Define a nested route for fitness-related pages */}
        <Route path="/fitness">
          <Route exact path="/fitness" element={<Fitness />} />
          <Route exact path="/fitness/services" element={<Services />} />
          
          {/* Commented out routes for future expansion */}
          {/* <Route exact path="/fitness/personal-training" element={<PersonalTraining />} />
          <Route exact path="/fitness/yoga" element={<Yoga />} />
          <Route exact path="/fitness/massage-therapy" element={<MassageTherapy />} />
          <Route exact path="/fitness/golf-mobility" element={<GolfMobility />} />
          */}
        </Route>
        
        {/* Define a route for fitness membership */}
        <Route exact path="/fitness/fitness-membership" element={<FitnessMembership />} />
        
        {/* Define other top-level routes */}
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/about" element={<AboutView />} />
        <Route exact path="/event" element={<EventView />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
      
      {/* Catch-all route for handling unknown URLs */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
