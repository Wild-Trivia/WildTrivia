import { Link } from "react-router-dom";
import { useQuizData } from "../contexts/useQuizData";
import { useProfile } from "../contexts/useProfile";

export default function ChallengeMenu() {
  const { quizData, setQuizData } = useQuizData();
  const { profile } = useProfile();

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

  const launchButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: "#7b59dada" };
      case "Starry Sky":
        return { backgroundColor: "#0f5e5bda" };
      case "Night Jungle":
        return { backgroundColor: "#044c7fda" };
    }
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
            style={launchButtonStyle()}
          >
            Start the challenge
          </Link>
        </div>
      </div>
    </div>
  );
}
