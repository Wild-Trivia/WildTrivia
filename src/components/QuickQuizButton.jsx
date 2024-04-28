import PropTypes from "prop-types";

function QuickQuizButton({ quizTheme, quizDifficulty, quizLength }) {
  return (
    <button>
      <p>{quizTheme}</p>
      <p>{quizDifficulty}</p>
      <p>{quizLength}</p>
    </button>
  );
}

export default QuickQuizButton;

QuickQuizButton.propTypes = {
  quizLength: PropTypes.number.isRequired,
  quizTheme: PropTypes.string.isRequired,
  quizDifficulty: PropTypes.string.isRequired,
};
