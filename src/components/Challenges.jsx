import PropTypes from "prop-types";
import { useQuizData } from "../contexts/useQuizData";

function Challenges({ challenge }) {
  const { setQuizData } = useQuizData();

  const handleChallengeClick = () => {
    setQuizData((value) => {
      switch (challenge.challengeName) {
        case "Survival":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challenge,
            quizTimer: 15,
            isSurvivalOn: true,
            lives: 3,
          };
        case "Fast Mode":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challenge,
            quizTimer: 5,
            isSurvivalOn: false,
            lives: 500,
          };
        case "Daily":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challenge,
            quizTimer: 15,
            isSurvivalOn: false,
            lives: 500,
          };
        case "Random":
          return {
            ...value,
            isChallengeButtonPushed: true,
            quizMode: challenge,
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
      style={{ backgroundColor: challenge.color }}
      className="challenges-button"
    >
      <p style={{ backgroundColor: challenge.color }} className="mode">
        {challenge.challengeName}
      </p>
    </button>
  );
}

export default Challenges;

Challenges.propTypes = {
  challenge: PropTypes.shape({
    id: PropTypes.number.isRequired,
    challengeName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
