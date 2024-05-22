import PropTypes from "prop-types";
import { useQuizData } from "../contexts/useQuizData";
import { useProfile } from "../contexts/useProfile";

export default function QuickQuizButton({ quiz }) {
  const { setQuizData } = useQuizData();
  const { profile } = useProfile();

  const quickQuizButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: quiz.color };
      case "Starry Sky":
        return { backgroundColor: "#00688b" };
      case "Night Jungle":
        return { backgroundColor: "#044c7f" };
    }
  };

  const handleQuickQuizClick = () => {
    setQuizData((value) => {
      return {
        ...value,
        isQuickQuizButtonPushed: true,
        quizMode: quiz,
        gameMode: "Quick Quiz",
        theme: quiz.quizTheme,
        difficulty: quiz.quizDifficulty,
        questionTotal: quiz.quizLength,
        quizTimer: 15,
        isSurvivalOn: false,
        lives: 500,
      };
    });
  };

  return (
    <button
      onClick={handleQuickQuizClick}
      className="quick-quiz-button"
      style={quickQuizButtonStyle()}
      to="/quiz"
    >
      <p className="theme">{quiz.quizTheme}</p>
      <p className="settings">{quiz.quizDifficulty}</p>
      <p className="settings">{quiz.quizLength} questions</p>
    </button>
  );
}

QuickQuizButton.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quizTheme: PropTypes.string.isRequired,
    themeID: PropTypes.number.isRequired,
    quizDifficulty: PropTypes.string.isRequired,
    quizLength: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
