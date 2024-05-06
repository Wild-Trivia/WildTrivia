import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function QuizTimer({ timeRemaining, questionTiming }) {
  const { profile } = useProfile();

  const hourglassAnimation = () => {
    if (questionTiming === "Ongoing") {
      return { animation: "3s ease-in-out 0s infinite rotation" };
    }
  };

  const timerStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return {
          backgroundColor: "rgba(123, 89, 218, 0.5)",
          borderColor: "rgba(123, 89, 218, 0.5)",
        };
      case "Starry Sky":
        return {
          backgroundColor: "#00688b8a",
          borderColor: "#00688b8a",
        };
      case "Night Jungle":
        return {
          backgroundColor: "#044c7f8a",
          borderColor: "#044c7f8a",
        };
    }
  };

  return (
    <div id="quiz-timer" style={timerStyle()}>
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

QuizTimer.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  questionTiming: PropTypes.string.isRequired,
};
