import { Link } from "react-router-dom";
import { useQuizData } from "../contexts/useQuizData";

export default function ChallengeMenu() {
  const { quizData, setQuizData } = useQuizData();

  const challengeMenuAnimation = () => {
    if (quizData.isChallengeButtonPushed) {
      return { transform: "translateY(0%)" };
    }
  };

  const handleVoidClick = () => {
    setQuizData((value) => {
      return { ...value, isChallengeButtonPushed: false };
    });
  };

  return (
    <div id="challenge-menu-container" style={challengeMenuAnimation()}>
      <div id="grey-void" onClick={handleVoidClick} />
      <div id="challenge-menu">
        <div id="challenge-image-container">
          <img src={quizData.quizMode.image} width="100%" />
        </div>
        <div id="challenge-text-container">
          <p id="challenge-text-title">{quizData.quizMode.challengeName}</p>
          <p id="challenge-text-content">{quizData.quizMode.description}</p>
        </div>
        <div id="challenge-launch-container">
          <Link
            to={quizData.quizMode.route}
            id="challenge-launch-button"
            onClick={handleVoidClick}
          >
            Start the challenge
          </Link>
        </div>
      </div>
    </div>
  );
}
