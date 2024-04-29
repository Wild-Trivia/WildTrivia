import PropTypes from "prop-types";

function Challenges({ challengeName, color }) {
  return (
    <button style={{ backgroundColor: color }} className="challenges-button">
      <p style={{ backgroundColor: color }} className="mode">
        {challengeName}
      </p>
    </button>
  );
}

export default Challenges;

Challenges.propTypes = {
  challengeName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
