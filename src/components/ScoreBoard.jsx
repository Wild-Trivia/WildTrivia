import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function ScoreBoard({
  totalScore,
  questionScore,
  questionStatus,
  questionTiming,
  isStreakOn,
}) {
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
    if (isStreakOn) {
      return {
        animation: "0.5s linear 0s infinite rainbow-streak",
        borderColor: "rgba(123, 89, 218, 0.5)",
      };
    } else {
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
    }
  };

  const scoreAnimation = () => {
    if (questionStatus === "CORRECT!" && questionTiming === "Ending") {
      return { color: "#0bc734", transform: "translateY(80%)" };
    }
  };

  return (
    <div id="score-board">
      <div id="score-text" style={scoreTextStyle()}>
        Score
      </div>
      <div id="score-number" style={scoreStyle()}>
        {totalScore}
      </div>
      <div id="score-add" style={scoreAnimation()}>
        +{questionScore}
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  totalScore: PropTypes.number.isRequired,
  questionScore: PropTypes.number.isRequired,
  questionStatus: PropTypes.string.isRequired,
  questionTiming: PropTypes.string.isRequired,
  isStreakOn: PropTypes.bool.isRequired,
};
