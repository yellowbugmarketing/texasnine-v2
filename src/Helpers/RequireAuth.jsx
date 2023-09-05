// Import necessary dependencies from React and React Router
import React from "react";
import { Navigate } from "react-router-dom";

// Import the AuthContext from a custom context (assuming it provides authentication information)
import { AuthContext } from "../context/AuthContext";

// Define a functional component called RequireAuth that takes a 'children' prop
const RequireAuth = ({ children }) => {
  // Access the 'isAuthenticated' value from the AuthContext using React's useContext hook
  let { isAuthenticated } = React.useContext(AuthContext);

  // If the user is not authenticated, redirect them to the login page using Navigate
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the children components
  return children;
};

// Export the RequireAuth component as the default export
export default RequireAuth;
