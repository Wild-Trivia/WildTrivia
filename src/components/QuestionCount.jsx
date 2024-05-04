import PropTypes from "prop-types";

function QuestionCount({ currentQuestionNumber, quizLength }) {
  return (
    <div id="question-count">
      {currentQuestionNumber}/{quizLength}
    </div>
  );
}

export default QuestionCount;

QuestionCount.propTypes = {
  quizLength: PropTypes.number.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
};
