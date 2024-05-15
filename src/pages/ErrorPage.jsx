import { Link } from "react-router-dom";
import { useProfile } from "../contexts/useProfile";
import { motion } from "framer-motion";

export default function ErrorPage() {
  const { profile } = useProfile();

  const errorPageStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundImage: "none" };
      case "Starry Sky":
        return { backgroundImage: "url('/src/assets/starry-sky.jpg')" };
      case "Night Jungle":
        return { backgroundImage: "url('/src/assets/night-jungle.jpg')" };
    }
  };

  const colorStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "black" };
      case "Starry Sky":
      case "Night Jungle":
        return { color: "white" };
    }
  };

  const errorQuitButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "#7b59da", border: "1px solid #7b59da" };
      case "Starry Sky":
        return { color: "#00688b", border: "1px solid #00688b" };
      case "Night Jungle":
        return { color: "#044c7f", border: "1px solid #044c7f" };
    }
  };

  return (
    <motion.div initial={{ x: -100 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.3 }} id="error-page-container" style={errorPageStyle()}>
      <p id="error-text" style={colorStyle()}>
        Sorry, something went wrong!
      </p>
      <img id="error-image" src="/src/assets/error.png" width="100%" />
      <p id="error-description" style={colorStyle()}>
        The API might be down (you can check the API state{" "}
        <a href="https://stats.uptimerobot.com/r99niw4gk">with this link</a>
        ), or maybe you just tried to create a custom quiz with a specific
        theme/difficulty combination for which the API couldn&apos;t supply
        enough entries...
      </p>
      <div id="error-quit-container">
        <Link to="/" id="error-quit-button" style={errorQuitButtonStyle()}>
          Back to Home Page
        </Link>
      </div>
    </motion.div>
  );
}
