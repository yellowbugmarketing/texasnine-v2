import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  // State to keep track of whether the element is intersecting
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe when the element becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        let [entry] = entries;
        console.log(entry.isIntersecting);
        // If the element is intersecting (visible), set toggle to false
        if (entry.isIntersecting) {
          setToggle(false);
        } else {
          // If the element is not intersecting (not visible), set toggle to true
          setToggle(true);
        }
      },
      {
        root: null, // The viewport is the root
        rootMargin: "50%", // Trigger when the element is 50% in the viewport
        threshold: 1.0, // Trigger when the element is fully in the viewport
      }
    );
    
    // Start observing the container element when it exists
    if (containerRef.current) observer.observe(containerRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []); // The empty dependency array means this effect runs once on mount

  // Create a reference to the container element
  const containerRef = useRef(null);

  return (
    <>
      {/* Render the child components using React Router's Outlet */}
      <Outlet />
    </>
  );
};

export default MainLayout;
