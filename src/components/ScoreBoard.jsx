import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

function ScoreBoard({ score }) {
  const { profile } = useProfile();

  const scoreTextStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "rgba(123, 89, 218, 0.7)" };
      case "Starry Sky":
      case "Night Jungle":
        return { color: "white" };
    }
  };

  const scoreStyle = () => {
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
    <div id="score-board">
      <div id="score-text" style={scoreTextStyle()}>
        Score
      </div>
      <div id="score-number" style={scoreStyle()}>
        {score}
      </div>
    </div>
  );
}

export default ScoreBoard;

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
};
