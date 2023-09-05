import { IconContext } from "react-icons"; // Importing IconContext from the 'react-icons' library for customizing icons.
import { AuthProvider } from "./context/AuthContext"; // Importing the 'AuthProvider' component from a custom context file.
import NavigationScroll from "./Helpers/NavigationScroll"; // Importing the 'NavigationScroll' component from a custom helper file.
import TheRoutes from "./routes"; // Importing the 'TheRoutes' component from a custom routes file.
import { useEffect } from "react"; // Importing 'useEffect' hook from React for side effects.
import ReactGA from "react-ga"; // Importing 'ReactGA' for Google Analytics integration.
import { useLocation } from "react-router-dom"; // Importing 'useLocation' hook from 'react-router-dom' for tracking the current URL.

const TRACKING_ID = "G-R0CJ5H2V5Z"; // Google Analytics Tracking ID.

ReactGA.initialize(TRACKING_ID); // Initialize Google Analytics with the provided Tracking ID.

function App() {
  const location = useLocation(); // Get the current location using the 'useLocation' hook from 'react-router-dom'.

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search); // Track a pageview event in Google Analytics whenever the location changes.
  }, [location]);

  return (
    <AuthProvider> {/* Wrap the entire app with 'AuthProvider' to provide authentication context */}
      <NavigationScroll> {/* Wrap the app content with 'NavigationScroll' to handle scrolling behavior */}
        <IconContext.Provider
          value={{
            color: "#464646", // Set the default icon color to #464646
            size: 36, // Set the default icon size to 36 pixels
          }}
        >
          <TheRoutes /> {/* Render the main application content */}
        </IconContext.Provider>
      </NavigationScroll>
    </AuthProvider>
  );
}

export default App;
