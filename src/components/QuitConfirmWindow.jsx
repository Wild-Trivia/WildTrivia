import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function QuitConfirmWindow({ backOption }) {
  const { profile } = useProfile();

  const confirmWindowStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "rgba(123, 89, 218, 0.7)" };
      case "Starry Sky":
        return { color: "#00688bb9" };
      case "Night Jungle":
        return { color: "#044c7fb9" };
    }
  };

  const handleClick = () => {
    backOption();
  };

  return createPortal(
    <div id="quit-confirm-window">
      <p id="confirm-text" style={confirmWindowStyle()}>
        Are you sure you want to quit the quiz?
      </p>
      <div id="confirm-buttons">
        <Link to="/">
          <button id="yes" style={confirmWindowStyle()}>
            Yes!
          </button>
        </Link>
        <button id="no" onClick={handleClick} style={confirmWindowStyle()}>
          No!
        </button>
      </div>
    </div>,
    document.querySelector("#ask-box")
  );
}

QuitConfirmWindow.propTypes = {
  backOption: PropTypes.func.isRequired,
};
