import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function QuickQuizButton({ quizTheme, quizDifficulty, quizLength, color }) {
  const linkToTheQuiz = () => {
    if (quizTheme === "Video Games") {
      return (
        <Link
          className="quick-quiz-button"
          style={{ backgroundColor: color }}
          to="/quiz"
        >
          <p className="theme" style={{ backgroundColor: color }}>
            {quizTheme}
          </p>
          <p className="settings" style={{ backgroundColor: color }}>
            {quizDifficulty}
          </p>
          <p className="settings" style={{ backgroundColor: color }}>
            {quizLength}
          </p>
        </Link>
      );
    } else {
      return (
        <button
          style={{ backgroundColor: color }}
          className="quick-quiz-button"
        >
          <p className="theme" style={{ backgroundColor: color }}>
            {quizTheme}
          </p>
          <p className="settings" style={{ backgroundColor: color }}>
            {quizDifficulty}
          </p>
          <p className="settings" style={{ backgroundColor: color }}>
            {quizLength}
          </p>
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
