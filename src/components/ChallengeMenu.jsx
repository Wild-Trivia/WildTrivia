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

  const imageSource = () => {
    switch (quizData.quizMode) {
      case "Survival":
        return "src/assets/survival.jpg";
      case "Fast Mode":
        return "src/assets/fast-mode.jpg";
      case "Daily":
        return "src/assets/daily.jpg";
      case "Random":
        return "src/assets/random.jpg";
    }
  };

  const textContent = () => {
    switch (quizData.quizMode) {
      case "Survival":
        return "Make your way in a rain of forty questions! Here, you start the game with three lives, and the quiz goes on until you're out!";
      case "Fast Mode":
        return "Be sharper than ever, cause with Fast Mode, you'll have only 5 seconds to answer each of the twenty questions you'll face!";
      case "Daily":
        return "Get ready for your cosy challenge of the day! Nothing special, just ten question on a single theme, chosen with love by our team!";
      case "Random":
        return "Fifteen questions, random themes and difficulty. Your best pick if you think you can face any quiz!";
    }
  };

  const linkRoute = () => {
    switch (quizData.quizMode) {
      case "Survival":
        return "/challenges/survival";
      case "Fast Mode":
        return "/challenges/fastmode";
      case "Daily":
        return "/challenges/daily";
      case "Random":
        return "/challenges/random";
    }
  };

  return (
    <div id="challenge-menu-container" style={challengeMenuAnimation()}>
      <div id="grey-void" onClick={handleVoidClick} />
      <div id="challenge-menu">
        <div id="challenge-image-container">
          <img src={imageSource()} width="100%" />
        </div>
        <div id="challenge-text-container">
          <p id="challenge-text-title">{quizData.quizMode}</p>
          <p id="challenge-text-content">{textContent()}</p>
        </div>
        <div id="challenge-launch-container">
          <Link
            to={linkRoute()}
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
