import PropTypes from "prop-types";
import AskBox from "./AskBox";
import AnswerBox from "./AnswerBox";
import QuestionCount from "./QuestionCount";
import QuizCheckText from "./QuizCheckText";

export default function QuestionCard({
  quizLength,
  currentQuestionNumber,
  questionStatus,
  questionTiming,
  questionText,
  clickCorrect,
  clickWrong,
  answers,
}) {
  const borderStyle = () => {
    if (questionTiming === "Ending") {
      switch (questionStatus) {
        case "Pending":
          return { border: "solid 1px rgba(179, 179, 179, 0.7)" };
        case "CORRECT!":
          return { border: "solid 1px #00ff38" };
        case "WRONG!":
          return { border: "solid 1px #e92d21" };
        case "TIME'S UP!":
          return { border: "solid 1px #e26c47" };
      }
    } else {
      return { border: "solid 1px rgba(179, 179, 179, 0.7)" };
    }
  };

  return (
    <div id="question-card" style={borderStyle()}>
      <div id="card-header">
        <QuestionCount
          currentQuestionNumber={currentQuestionNumber}
          quizLength={quizLength}
        />
        <QuizCheckText
          questionStatus={questionStatus}
          questionTiming={questionTiming}
        />
      </div>
      <AskBox questionText={questionText} />
      <div id="answer-zone">
        {answers.map((answer) => {
          return (
            <AnswerBox
              key={answer.id}
              answer={answer}
              questionStatus={questionStatus}
              questionTiming={questionTiming}
              clickCorrect={clickCorrect}
              clickWrong={clickWrong}
            />
          );
        })}
      </div>
      <div id="void-foot"></div>
    </div>
  );
}

QuestionCard.propTypes = {
  quizLength: PropTypes.number.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
  questionStatus: PropTypes.string.isRequired,
  questionTiming: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  clickCorrect: PropTypes.func.isRequired,
  clickWrong: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
