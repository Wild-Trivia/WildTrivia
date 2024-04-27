import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function QuitConfirmWindow({ backOption }) {
  const handleClick = () => {
    backOption();
  };

  return createPortal(
    <div id="quit-confirm-window">
      <p id="confirm-text">Are you sure you want to quit the quiz?</p>
      <div id="confirm-buttons">
        <Link to="/">
          <button id="yes">Yes!</button>
        </Link>
        <button id="no" onClick={handleClick}>
          No!
        </button>
      </div>
    </div>,
    document.querySelector("#ask-box")
  );
}

export default QuitConfirmWindow;

QuitConfirmWindow.propTypes = {
  backOption: PropTypes.func.isRequired,
};
