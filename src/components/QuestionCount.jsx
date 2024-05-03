import PropTypes from "prop-types";
import { useQuizData } from "../contexts/useQuizData";

function QuestionCount({ currentQuestionNumber, quizLength }) {
  const { quizData } = useQuizData();

  const questionCountDisplay = () => {
    if (quizData.isSurvivalOn) {
      return `${currentQuestionNumber}/???`;
    } else {
      return `${currentQuestionNumber}/${quizLength}`;
    }
  };

  return <div id="question-count">{questionCountDisplay()}</div>;
}

export default QuestionCount;

QuestionCount.propTypes = {
  quizLength: PropTypes.number.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
};
