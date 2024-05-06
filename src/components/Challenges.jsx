import PropTypes from "prop-types";
import { useQuizData } from "../contexts/useQuizData";
import { useProfile } from "../contexts/useProfile";

export default function Challenges({ challenge }) {
  const { setQuizData } = useQuizData();
  const { profile } = useProfile();

  const challengeStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: challenge.color };
      case "Starry Sky":
        return { backgroundColor: "#0f5e5b" };
      case "Night Jungle":
        return { backgroundColor: "#044c7f" };
    }
  };

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
      <p style={challengeStyle()} className="mode">
        {challenge.challengeName}
      </p>
    </button>
  );
}

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
