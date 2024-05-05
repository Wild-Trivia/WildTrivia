import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function AnswerBox({
  answer,
  questionStatus,
  questionTiming,
  clickCorrect,
  clickWrong,
}) {
  const [answerStatus, setAnswerStatus] = useState("unselected");

  useEffect(() => {
    if (questionTiming === "Ongoing") {
      setAnswerStatus("unselected");
    } else if (
      questionTiming === "Time" &&
      answerStatus === "unselected" &&
      answer.isCorrect
    ) {
      setAnswerStatus("time-unselected-correct");
    } else if (
      questionTiming === "Time" &&
      answerStatus === "unselected" &&
      answer.isCorrect === false
    ) {
      setAnswerStatus("time-unselected-wrong");
    } else if (
      questionTiming === "Timeup" &&
      answerStatus === "unselected" &&
      answer.isCorrect
    ) {
      setAnswerStatus("timeup-unselected-correct");
    } else if (
      questionTiming === "Timeup" &&
      answerStatus === "unselected" &&
      answer.isCorrect === false
    ) {
      setAnswerStatus("timeup-unselected-wrong");
    } else if (
      questionTiming === "Ending" &&
      answerStatus === "time-unselected-correct"
    ) {
      setAnswerStatus("ending-unselected-correct");
    } else if (
      questionTiming === "Ending" &&
      (answerStatus === "time-unselected-wrong" ||
        answerStatus === "timeup-unselected-wrong")
    ) {
      setAnswerStatus("ending-unselected-wrong");
    } else if (
      questionTiming === "Ending" &&
      answerStatus === "time-selected-correct"
    ) {
      setAnswerStatus("ending-selected-correct");
    } else if (
      questionTiming === "Ending" &&
      answerStatus === "time-selected-wrong"
    ) {
      setAnswerStatus("ending-selected-wrong");
    } else if (
      questionTiming === "Ending" &&
      answerStatus === "timeup-unselected-correct"
    ) {
      setAnswerStatus("ending-timeup-unselected-correct");
    }
  }, [answer.isCorrect, answerStatus, questionTiming]);

  const handleClick = () => {
    if (answer.isCorrect) {
      clickCorrect();
      setAnswerStatus("time-selected-correct");
    } else {
      clickWrong();
      setAnswerStatus("time-selected-wrong");
    }
  };

  const answerStyle = () => {
    switch (answerStatus) {
      case "unselected":
        return { backgroundColor: "white", border: "solid 1px #e4e4e4" };
      case "time-selected-correct":
      case "time-selected-wrong":
        return { backgroundColor: "#f4d76d", border: "solid 1px #dbb01a" };
      case "ending-selected-correct":
      case "ending-unselected-correct":
        return {
          backgroundColor: "rgba(160, 249, 146, 0.7)",
          border: "solid 1px #5be77a",
        };
      case "ending-selected-wrong":
        return {
          backgroundColor: "rgba(232, 101, 101, 0.7)",
          border: "solid 1px #e51818",
        };
      case "time-unselected-correct":
      case "time-unselected-wrong":
      case "timeup-unselected-correct":
      case "timeup-unselected-wrong":
      case "ending-unselected-wrong":
        return {
          backgroundColor: "rgba(175, 172, 172, 0.7)",
          border: "solid 1px #e4e4e4",
        };
      case "ending-timeup-unselected-correct":
        return {
          backgroundColor: "#ffab5e",
          border: "solid 1px #e26c47",
        };
    }
  };

  return (
    <button
      id={answer.id}
      style={answerStyle()}
      className="answer-box"
      onClick={handleClick}
      disabled={questionStatus !== "Pending"}
    >
      <p className="answer-text">{answer.text}</p>
    </button>
  );
}

export default AnswerBox;

AnswerBox.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }).isRequired,
  questionStatus: PropTypes.string.isRequired,
  questionTiming: PropTypes.string.isRequired,
  clickCorrect: PropTypes.func.isRequired,
  clickWrong: PropTypes.func.isRequired,
};
