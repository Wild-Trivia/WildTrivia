import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function AskBox({ questionText }) {
  const { profile } = useProfile();

  const quitButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return {
          backgroundColor: "rgba(123, 89, 218, 0.7)",
        };
      case "Starry Sky":
        return {
          backgroundColor: "#00688bb9",
        };
      case "Night Jungle":
        return {
          backgroundColor: "#044c7fb9",
        };
    }
  };

  return (
    <div id="ask-box" style={quitButtonStyle()}>
      <p id="question-text">{questionText}</p>
    </div>
  );
}

AskBox.propTypes = {
  questionText: PropTypes.string.isRequired,
};
