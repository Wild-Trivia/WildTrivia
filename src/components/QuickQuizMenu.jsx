import { Link } from "react-router-dom";
import { useQuizData } from "../contexts/useQuizData";
import { useProfile } from "../contexts/useProfile";

export default function QuickQuizMenu() {
  const { quizData, setQuizData } = useQuizData();
  const { profile } = useProfile();

  const quickQuizMenuAnimation = () => {
    if (quizData.isQuickQuizButtonPushed) {
      return { transform: "translateY(0%)", backgroundColor: "rgba(153, 151, 151, 0.400)" };
    }
  };

  const routeHandler = () => {
    return `/quiz/${quizData.quizMode.quizLength}/${quizData.quizMode.themeID}/${quizData.quizMode.quizDifficulty}`;
  };

  const handleVoidClick = () => {
    setQuizData((value) => {
      return { ...value, isQuickQuizButtonPushed: false };
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
    <div id="quick-quiz-menu-container" style={quickQuizMenuAnimation()}>
      <div className="grey-void" onClick={handleVoidClick} />
      <div id="quick-quiz-menu">
        <div id="quick-quiz-image-container">
          <img src={quizData.quizMode.image} width="100%" />
        </div>
        <div id="quick-quiz-text-container">
          <p id="quick-quiz-text-title">Quick Quiz</p>
          <p className="quick-quiz-text-content">
            Theme: {quizData.quizMode.quizTheme}
          </p>
          <p className="quick-quiz-text-content">
            Difficulty: {quizData.quizMode.quizDifficulty}
          </p>
          <p className="quick-quiz-text-content">
            {quizData.quizMode.quizLength} questions
          </p>
        </div>
        <div id="quick-quiz-launch-container">
          <Link
            to={routeHandler()}
            id="quick-quiz-launch-button"
            onClick={handleVoidClick}
            style={launchButtonStyle()}
          >
            Start the quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
