import PropTypes from "prop-types";

function QuizCheckText({ questionStatus, questionTiming }) {
  const checkStyle = () => {
    if (questionTiming === "Ending") {
      switch (questionStatus) {
        case "Pending":
          return { display: "none", color: "rgba(215, 204, 248, 0)" };
        case "CORRECT!":
          return { display: "initial", color: "#0bc734" };
        case "WRONG!":
          return { display: "initial", color: "#cc271c" };
        case "TIME'S UP!":
          return { display: "initial", color: "#f18548" };
      }
    } else {
      return { display: "none", color: "rgba(215, 204, 248, 0)" };
    }
  };

  return (
    <div style={checkStyle()} id="quiz-check-text">
      {questionStatus}
    </div>
  );
}

export default QuizCheckText;

QuizCheckText.propTypes = {
  questionStatus: PropTypes.string.isRequired,
  questionTiming: PropTypes.string.isRequired,
};
