import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

function Challenges({ challengeName, color }) {
  const { profile } = useProfile();

  const challengeStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: color };
      case "Starry Sky":
        return { backgroundColor: "#0f5e5b" };
      case "Night Jungle":
        return { backgroundColor: "#044c7f" };
    }
  };

  return (
    <button style={challengeStyle()} className="challenges-button">
      <p className="mode">{challengeName}</p>
    </button>
  );
}

export default Challenges;

Challenges.propTypes = {
  challengeName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
