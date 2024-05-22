import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function QuitButton({ handleQuitButton }) {
  const { profile } = useProfile();

  const quitButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return {
          backgroundColor: "rgba(123, 89, 218, 0.5)",
          borderColor: "rgba(123, 89, 218, 0.5)",
        };
      case "Starry Sky":
        return {
          backgroundColor: "#00688b8a",
          borderColor: "#00688b8a",
        };
      case "Night Jungle":
        return {
          backgroundColor: "#044c7f8a",
          borderColor: "#044c7f8a",
        };
    }
  };

  return (
    <>
      <button
        id="quit-button"
        onClick={handleQuitButton}
        style={quitButtonStyle()}
      >
        X
      </button>
    </>
  );
}

QuitButton.propTypes = {
  handleQuitButton: PropTypes.func.isRequired,
};
