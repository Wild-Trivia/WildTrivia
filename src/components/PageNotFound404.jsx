import { Link } from "react-router-dom";
import { useProfile } from "../contexts/useProfile";
import { motion } from "framer-motion";

export default function PageNotFound404() {
  const { profile } = useProfile();

  const PageNotFoundPageStyle = () => {
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

  const PageNotFoundQuitButtonStyle = () => {
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
    transition={{ duration: 0.3 }} id="notfound-page-container" style={PageNotFoundPageStyle()}>
      <p id="notfound-text" style={colorStyle()}>
        Page Not Found
      </p>
      <img id="notfound-image" src="/src/assets/pagenotfound.jpg" width="100%" />
      <h2></h2>
      <p id="notfound-description" style={colorStyle()}>
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place? Let's go home and try from there.
      </p>
      <div id="notfound-quit-container">
        <Link to="/" id="notfound-quit-button" style={PageNotFoundQuitButtonStyle()}>
          Back to Home Page
        </Link>
      </div>
    </motion.div>
  );
}
