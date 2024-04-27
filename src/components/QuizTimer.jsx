import PropTypes from "prop-types";

function QuizTimer({ timeRemaining }) {
  return (
    <div id="quiz-timer">
      <p id="timer-text">{timeRemaining}</p>
      <img id="hourglass" src="src/assets/hourglass.svg" width="35px" />
    </div>
  );
}

export default QuizTimer;

QuizTimer.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
};
