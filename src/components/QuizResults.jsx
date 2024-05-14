import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";
import { useQuizData } from "../contexts/useQuizData";
import Confetti from "react-confetti";

export default function QuizResults({
  score,
  quizLength,
  goodAnswers,
  streakCount,
  maxStreak,
}) {
  const { quizData } = useQuizData();
  const { profile } = useProfile();

  const bestStreak = () => {
    if (streakCount > maxStreak) {
      return `${streakCount}`;
    } else {
      return `${maxStreak}`;
    }
  };

  const resultTitle = () => {
    if (goodAnswers / quizLength >= 0.5) {
      return `Good job, ${profile.profileName}!!`;
    } else if (goodAnswers === 0) {
      return `Sorry, ${profile.profileName}...`;
    } else {
      return `Not bad, ${profile.profileName}!`;
    }
  };

  const resultImageSource = () => {
    if (goodAnswers / quizLength >= 0.5) {
      return "/src/assets/result-img-crown.png";
    } else if (goodAnswers === 0) {
      return "/src/assets/result-img-defeat.png";
    } else {
      return "/src/assets/result-img-standard.png";
    }
  };

  const resultPageStyle = () => {
    if (goodAnswers === 0) {
      return { backgroundImage: "linear-gradient(45deg, #cc271c, #000)" };
    } else {
      switch (profile.theme) {
        case "Classic":
          return { backgroundImage: "none" };
        case "Starry Sky":
          return {
            backgroundImage: "url('/src/assets/starry-sky.jpg')",
            backgroundSize: "cover",
          };
        case "Night Jungle":
          return {
            backgroundImage: "url('/src/assets/night-jungle.jpg')",
            backgroundSize: "cover",
          };
      }
    }
  };

  const colorStyle = () => {
    if (goodAnswers === 0) {
      return { color: "#000" };
    } else {
      switch (profile.theme) {
        case "Classic":
          return { color: "#7b59da" };
        case "Starry Sky":
          return { color: "#00688b" };
        case "Night Jungle":
          return { color: "#044c7f" };
      }
    }
  };

  const backgroundColorStyle = () => {
    if (goodAnswers === 0) {
      return { backgroundColor: "#000" };
    } else {
      switch (profile.theme) {
        case "Classic":
          return { backgroundColor: "#7b59da" };
        case "Starry Sky":
          return { backgroundColor: "#00688b" };
        case "Night Jungle":
          return { backgroundColor: "#044c7f" };
      }
    }
  };

  return (
    <div id="quiz-results-container" style={resultPageStyle()}>
      {goodAnswers / quizLength >= 0.5 && (
        <Confetti width="360px" height="760px" />
      )}
      <div id="result-img-container">
        <img id="result-img" src={resultImageSource()} width="70%" />
      </div>
      <div id="quiz-results-card">
        <div id="result-text-container">
          <p id="result-title" style={colorStyle()}>
            {resultTitle()}
          </p>
          <p className="result-text" style={colorStyle()}>
            Your score: {score}
          </p>
          <p className="result-text" style={colorStyle()}>
            Good answers: {goodAnswers}
          </p>
          <p className="result-text" style={colorStyle()}>
            Best streak: {bestStreak()}
          </p>
        </div>
        <div id="summary-card">
          <p id="summary-title" style={colorStyle()}>
            Quiz Summary
          </p>
          <dl id="summary-box">
            <dt className="summary-text">Game Mode:</dt>
            <dd className="summary-text" style={colorStyle()}>
              {quizData.gameMode}
            </dd>
            <dt className="summary-text">Theme:</dt>
            <dd className="summary-text" style={colorStyle()}>
              {quizData.theme}
            </dd>
            <dt className="summary-text">Difficulty:</dt>
            <dd className="summary-text" style={colorStyle()}>
              {quizData.difficulty}
            </dd>
            <dt className="summary-text">Number of questions:</dt>
            <dd className="summary-text" style={colorStyle()}>
              {quizLength}
            </dd>
          </dl>
        </div>
        <p id="ranking-result"></p>
      </div>
      <div id="results-quit">
        <Link to="/">
          <button id="back-button" style={backgroundColorStyle()}>
            Back to menu
          </button>
        </Link>
      </div>
    </div>
  );
}

QuizResults.propTypes = {
  score: PropTypes.number.isRequired,
  quizLength: PropTypes.number.isRequired,
  goodAnswers: PropTypes.number.isRequired,
  streakCount: PropTypes.number.isRequired,
  maxStreak: PropTypes.number.isRequired,
};
