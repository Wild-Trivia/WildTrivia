import QuickQuizButton from "../components/QuickQuizButton";
import Challenges from "../components/Challenges";
import { useState } from "react";

const quickQuizList = [
  {
    id: 1,
    quizTheme: "Video Games",
    quizDifficulty: "Medium",
    quizLength: "10 Questions",
    color: "#e32636",
  },
  {
    id: 2,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
    color: "#2e8b57",
  },
  {
    id: 3,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
    color: "#ff4500",
  },
  {
    id: 4,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
    color: "#00688b",
  },
  {
    id: 5,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
    color: "#4169e1",
  },
  {
    id: 6,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
    color: "#ca3291",
  },
];

const challengeList = [
  {
    id: 1,
    challengeName: "Fast Mode",
    color: "#00688b",
  },
  {
    id: 2,
    challengeName: "Survival",
    color: "#ca3291",
  },
  {
    id: 3,
    challengeName: "Daily",
    color: "#2e8b57",
  },
  {
    id: 4,
    challengeName: "Random",
    color: "#dd4d4d",
  },
];

function HomePage() {
  const [profileState, setProfileState] = useState({
    profileName: "Jean",
    isMenuButtonPushed: false,
  });

  const profileMenuToggle = () => {
    setProfileState((value) => {
      return {
        ...value,
        isMenuButtonPushed: !value.isMenuButtonPushed,
      };
    });
  };

  const animationHandlerQuiz = () => {
    if (profileState.isMenuButtonPushed) {
      return { transform: "translateY(39%)" };
    }
  };

  const animationHandlerMenu = () => {
    if (profileState.isMenuButtonPushed) {
      return { transform: "translateY(15%)" };
    }
  };

  return (
    <div id="home-page-container">
      <div id="home-page-header">
        <p id="greeting">Hello, {profileState.profileName}!</p>
        <button id="profile-button" onClick={profileMenuToggle}>
          <img src="src/assets/user-icon.png" />
        </button>
      </div>
      {/* {profileState.isMenuButtonPushed && ( */}
      <div id="profile-menu-window" style={animationHandlerMenu()}>
        <p>Bonjour</p>
        <p>Bonjour</p>
        <p>Bonjour</p>
        <p>Bonjour</p>
        <p>Bonjour</p>
        <p id="profile-void">Bonjour</p>
      </div>
      {/* )} */}
      <div id="quiz-select-container" style={animationHandlerQuiz()}>
        <div className="title-box">
          <p className="quiz-select-title">Quick Quiz</p>
        </div>

        <div id="quick-quiz-box">
          {quickQuizList.map((quiz) => {
            return (
              <QuickQuizButton
                key={quiz.id}
                quizTheme={quiz.quizTheme}
                quizDifficulty={quiz.quizDifficulty}
                quizLength={quiz.quizLength}
                color={quiz.color}
              />
            );
          })}
        </div>
        <div id="quiz-creation-container">
          <button id="quiz-creation-button">Create My Quiz</button>
        </div>
        <div className="title-box">
          <p className="quiz-select-title">Challenges</p>
        </div>

        <div id="challenges-box">
          {challengeList.map((challenge) => {
            return (
              <Challenges
                key={challenge.id}
                challengeName={challenge.challengeName}
                color={challenge.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
