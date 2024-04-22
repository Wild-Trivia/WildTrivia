import PropTypes from "prop-types";

function QuizTimer({ timeRemaining }) {
  return (
    <div id="quiz-timer">
      {timeRemaining}
      <img id="hourglass" src="src/assets/hourglass.svg" width="35px" />
    </div>
  );
}

export default QuizTimer;

QuizTimer.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
};
