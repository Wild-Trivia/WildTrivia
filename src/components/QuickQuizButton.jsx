import PropTypes from "prop-types";

function QuickQuizButton({ quizTheme, quizDifficulty, quizLength, color }) {
  return (
    <button style={{ backgroundColor: color }} className="quick-quiz-button">
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

export default QuickQuizButton;

QuickQuizButton.propTypes = {
  quizLength: PropTypes.number.isRequired,
  quizTheme: PropTypes.string.isRequired,
  quizDifficulty: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
