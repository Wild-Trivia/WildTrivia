import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

function QuestionCount({ currentQuestionNumber, quizLength }) {
  const { profile } = useProfile();

  const countStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "rgba(123, 89, 218, 0.9)" };
      case "Starry Sky":
        return { color: "#00688b" };
      case "Night Jungle":
        return { color: "#044c7f" };
    }
  };

  return (
    <div id="question-count" style={countStyle()}>
      {currentQuestionNumber}/{quizLength}
    </div>
  );
}

export default QuestionCount;

QuestionCount.propTypes = {
  quizLength: PropTypes.number.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
};
