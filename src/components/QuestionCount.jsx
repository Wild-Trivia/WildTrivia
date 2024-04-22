import PropTypes from "prop-types";

function QuestionCount({ currentQuestion, quizLength }) {
  return (
    <div id="question-count">
      {currentQuestion}/{quizLength}
    </div>
  );
}

export default QuestionCount;

QuestionCount.propTypes = {
  quizLength: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};
