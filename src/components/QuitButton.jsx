import PropTypes from "prop-types";

function QuitButton({ handleQuitButton }) {
  return (
    <>
      <button id="quit-button" onClick={handleQuitButton}>
        X
      </button>
    </>
  );
}

export default QuitButton;

QuitButton.propTypes = {
  handleQuitButton: PropTypes.func.isRequired,
};
