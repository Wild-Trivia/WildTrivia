import PropTypes from "prop-types";

function Challenges({ challengeType }) {
  return (
    <button>
      <p>{challengeType}</p>
    </button>
  );
}

export default Challenges;

Challenges.propTypes = {
  challengeType: PropTypes.string.isRequired,
};
