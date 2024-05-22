import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function LivesCount({ livesRemaining }) {
  const { profile } = useProfile();

  const livesStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "rgba(123, 89, 218, 0.7)" };
      case "Starry Sky":
      case "Night Jungle":
        return { color: "white" };
    }
  };

  const livesDisplay = () => {
    switch (livesRemaining) {
      case 3:
        return "❤️ ❤️ ❤️";
      case 2:
        return "❤️ ❤️ 🖤";
      case 1:
        return "❤️ 🖤 🖤";
      case 0:
        return "🖤 🖤 🖤";
    }
  };

  return (
    <>
      <p id="lives-remaining-title" style={livesStyle()}>
        Lives Remaining:
      </p>
      <p id="lives-remaining-content">{livesDisplay()}</p>
    </>
  );
}

LivesCount.propTypes = {
  livesRemaining: PropTypes.number.isRequired,
};
