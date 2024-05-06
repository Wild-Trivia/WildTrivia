import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

function QuickQuizButton({ quizTheme, quizDifficulty, quizLength, color }) {
  const { profile } = useProfile();

  const quickQuizButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: color };
      case "Starry Sky":
        return { backgroundColor: "#00688b" };
      case "Night Jungle":
        return { backgroundColor: "#044c7f" };
    }
  };

  const linkToTheQuiz = () => {
    if (quizTheme === "Video Games") {
      return (
        <Link
          className="quick-quiz-button"
          style={quickQuizButtonStyle()}
          to="/quiz"
        >
          <p className="theme">{quizTheme}</p>
          <p className="settings">{quizDifficulty}</p>
          <p className="settings">{quizLength}</p>
        </Link>
      );
    } else {
      return (
        <button style={quickQuizButtonStyle()} className="quick-quiz-button">
          <p className="theme">{quizTheme}</p>
          <p className="settings">{quizDifficulty}</p>
          <p className="settings">{quizLength}</p>
        </button>
      );
    }
  };
  return linkToTheQuiz();
}

export default QuickQuizButton;

QuickQuizButton.propTypes = {
  quizLength: PropTypes.string.isRequired,
  quizTheme: PropTypes.string.isRequired,
  quizDifficulty: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
