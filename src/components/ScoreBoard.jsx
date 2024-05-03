import PropTypes from "prop-types";

function ScoreBoard({
  totalScore,
  questionScore,
  questionStatus,
  questionTiming,
}) {
  const scoreAnimation = () => {
    if (questionStatus === "CORRECT!" && questionTiming === "Ending") {
      return { color: "#0bc734", transform: "translateY(80%)" };
    }
  };

  return (
    <div id="score-board">
      <div id="score-text">Score</div>
      <div id="score-number">{totalScore}</div>
      <div id="score-add" style={scoreAnimation()}>
        +{questionScore}
      </div>
    </div>
  );
}

export default ScoreBoard;

ScoreBoard.propTypes = {
  totalScore: PropTypes.number.isRequired,
  questionScore: PropTypes.number.isRequired,
  questionStatus: PropTypes.string.isRequired,
  questionTiming: PropTypes.string.isRequired,
};
