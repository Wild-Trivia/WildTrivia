import PropTypes from "prop-types";

function QuizCheckText({questionStatus}) {
    const displayStyle = () => {
        switch(questionStatus) {
          case "Pending":
            return "none";
          case "CORRECT!":
          case "WRONG!":
            return "initial";
              }
      }

      const colorStyle = () => {
        switch(questionStatus) {
          case "Pending":
            return "rgba(215, 204, 248, 0)";
          case "CORRECT!":
            return "#0bc734";
          case "WRONG!":
            return "#cc271c";
              }
      }


    return (<div style={{display: displayStyle(), color: colorStyle()}} id="quiz-check-text">{questionStatus}</div>)
    }
    
export default QuizCheckText;

QuizCheckText.propTypes = {
    questionStatus: PropTypes.string.isRequired,
  }