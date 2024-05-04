import PropTypes from "prop-types";
import { useQuizData } from "../contexts/useQuizData";

function Challenges({ challengeName, color }) {
  const { setQuizData } = useQuizData();

  const handleChallengeClick = () => {
    setQuizData((value) => {
      switch (challengeName) {
        case "Survival":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challengeName,
            quizTimer: 15,
            isSurvivalOn: true,
            lives: 3,
          };
        case "Fast Mode":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challengeName,
            quizTimer: 5,
            isSurvivalOn: false,
            lives: 500,
          };
        case "Daily":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challengeName,
            quizTimer: 15,
            isSurvivalOn: false,
            lives: 500,
          };
        case "Random":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challengeName,
            quizTimer: 15,
            isSurvivalOn: false,
            lives: 500,
          };
      }
    });
  };

  return (
    <button
      onClick={handleChallengeClick}
      style={{ backgroundColor: color }}
      className="challenges-button"
    >
      <p style={{ backgroundColor: color }} className="mode">
        {challengeName}
      </p>
    </button>
  );
}

export default Challenges;

Challenges.propTypes = {
  challengeName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
