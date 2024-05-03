import PropTypes from "prop-types";

function QuizTimer({ timeRemaining, questionTiming }) {
  const hourglassAnimation = () => {
    if (questionTiming === "Ongoing") {
      return { animation: "3s ease-in-out 0s infinite rotation" };
    }
  };

  return (
    <div id="quiz-timer">
      <p id="timer-text">{timeRemaining}</p>
      <img
        id="hourglass"
        src="src/assets/hourglass.svg"
        width="35px"
        style={hourglassAnimation()}
      />
    </div>
  );
}

export default QuizTimer;

QuizTimer.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  questionTiming: PropTypes.string.isRequired,
};
