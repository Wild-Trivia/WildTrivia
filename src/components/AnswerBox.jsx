import PropTypes from "prop-types";
import { useEffect, useState } from "react";


function AnswerBox({answer, questionStatus, setQuestionStatus}) {
const [answerStatus, setAnswerStatus] = useState("unselected")

useEffect(() => {
  if ((questionStatus === "Pending")) {
    setAnswerStatus("unselected")
  } else if ((questionStatus !== "Pending") && (answerStatus === "unselected") && answer.isCorrect) {
    setAnswerStatus("unselected-correct")
  } else if ((questionStatus !== "Pending") && (answerStatus === "unselected") && (answer.isCorrect === false)) {
    setAnswerStatus("unselected-wrong")
  }

}, [questionStatus, answerStatus, answer.isCorrect])

  const handleClick = () => {
        if ( answer.isCorrect ) {
      setQuestionStatus("CORRECT!")
      setAnswerStatus("selected-correct")
    } else {
      setQuestionStatus("WRONG!")
      setAnswerStatus("selected-wrong")
    }
  };
  
const backgroundStyle = () => {
  switch(answerStatus) {
    case "unselected":
      return "white";
    case "selected-correct":
      return "rgba(160, 249, 146, 0.7)";
    case "selected-wrong":
      return "rgba(232, 101, 101, 0.7)";
    case "unselected-correct":
      return "rgba(160, 249, 146, 0.7)";
    case "unselected-wrong":
      return "rgba(175, 172, 172, 0.7)";
        }
}

const borderStyle = () => {
  switch(answerStatus) {
    case "unselected":
      return "solid 1px #e4e4e4";
    case "selected-correct":
      return "solid 1px #5be77a";
    case "selected-wrong":
      return "solid 1px #e51818";
    case "unselected-correct":
      return "solid 1px #5be77a";
    case "unselected-wrong":
      return "solid 1px #e4e4e4";
        }
}

    return (<button
      id={answer.id}
      style={{backgroundColor: backgroundStyle(), border: borderStyle()}}
      className="answer-box"
      onClick={handleClick}
      disabled={ questionStatus !== "Pending" }
      >{answer.text}</button>)
    }
    
export default AnswerBox;

AnswerBox.propTypes = {
        answer: PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          isCorrect: PropTypes.bool.isRequired,
        }).isRequired,
        questionStatus: PropTypes.string.isRequired,
        setQuestionStatus: PropTypes.func.isRequired,
      }

