import PropTypes from "prop-types";

export default function LivesCount({ livesRemaining }) {
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
      <p id="lives-remaining-title">Lives Remaining:</p>
      <p id="lives-remaining-content">{livesDisplay()}</p>
    </>
  );
}

LivesCount.propTypes = {
  livesRemaining: PropTypes.number.isRequired,
};
