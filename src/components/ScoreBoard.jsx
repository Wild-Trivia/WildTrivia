import PropTypes from "prop-types";

function ScoreBoard({ score }) {
  return (
    <div id="score-board">
      <div id="score-text">Score</div>
      <div id="score-number">{score}</div>
    </div>
  );
}

export default ScoreBoard;

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
};
