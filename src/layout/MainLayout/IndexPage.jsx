// Import necessary modules from React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Define the functional component for the Index Page
export default function IndexPage() {
  return (
    <>
      {/* Outer container with a black background */}
      <div className="flex flex-col justify-between bg-black">
        <div className="px-4 py-6">
          {/* Main navigation section */}
          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            {/* Details component used for collapsible navigation */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              {/* Summary element for Golf section */}
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium"> Golf </span>
                </div>

                {/* Icon that rotates on open/close */}
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              {/* Sub-navigation links for the Golf section */}
              <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
                <Link
                  to="/golf/rates"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Rates </span>
                </Link>

                <Link
                  to="/golf/memberships"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium">Memberships</span>
                </Link>
                <Link
                  to="/golf/lessons"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Lessons</span>
                </Link>
                <Link
                  to="/tee-times"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Tee Times</span>
                </Link>
              </nav>
            </details>
            {/* Other top-level navigation links */}
            <Link
              to="/fitness"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Fitness</span>
            </Link>
            <Link
              to="/tee-times"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Tee Times </span>
            </Link>
            <Link
              to="/community"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Community </span>
            </Link>

            <Link
              to="/event"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Events </span>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> About Us </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
