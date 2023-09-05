// Importing necessary dependencies from React and React Router
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// project imports
// This line is commented out. It suggests that there might be a component called Customization
// being imported from "../Customization," but it's not currently used in this code.

// ==============================|| MINIMAL LAYOUT ||============================== //

// MinimalLayout is a React component that enforces minimal layout for authenticated users.
// It wraps its children components, allowing access only to authenticated users.
const MinimalLayout = ({ children }) => {
  // Accessing the isAuthenticated state from the AuthContext using useContext hook.
  const { isAuthenticated } = useContext(AuthContext);
  
  // Accessing the navigate function from React Router to programmatically navigate to different routes.
  const navigate = useNavigate();

  // useEffect hook is used to perform an action when the component is mounted.
  // In this case, it checks if the user is not authenticated, and if so, it navigates them to the home page ("/").
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []); // The empty dependency array means this effect runs only once, on component mount.

  // Render the children components passed to MinimalLayout.
  return <>{children}</>;
};

// Exporting the MinimalLayout component to be used elsewhere in the application.
export default MinimalLayout;
