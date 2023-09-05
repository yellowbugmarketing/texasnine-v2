// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App";

// Import CSS styles
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Import styles for a third-party carousel component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create a React root and render the main App component wrapped in StrictMode
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is used for highlighting potential issues in development
  <React.StrictMode>
    {/* BrowserRouter provides routing functionality for the app */}
    <BrowserRouter>
      {/* The main App component is the root of the application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
