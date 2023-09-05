// Import React and the 'useState' hook from the React library.
import React, { useState } from "react";

// Import the 'Loader' component from "../Helpers/Loader".
import Loader from "../Helpers/Loader";

// Create a new React context called 'AuthContext'.
export const AuthContext = React.createContext();

// Create an 'AuthProvider' component that takes 'children' as a prop.
export const AuthProvider = ({ children }) => {
  // Define two state variables using the 'useState' hook:
  // 1. 'isAuthenticated': Initially set to 'true'.
  // 2. 'isLoading': Initially set to 'false'.
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Return the 'AuthContext.Provider' component which wraps its children.
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated, // Provide the 'isAuthenticated' state as a value in the context.
      }}
    >
      {!isLoading ? children : <Loader />} {/* Render 'children' or 'Loader' based on 'isLoading' state. */}
    </AuthContext.Provider>
  );
};
