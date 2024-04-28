// import { Link } from "react-router-dom";
import QuickQuizButton from "../components/QuickQuizButton";
import Challenges from "../components/Challenges";

const quickQuizList = [
  {
    id: 1,
    quizTheme: "Video Games",
    quizDifficulty: "Difficulty: Medium",
    quizLength: "Questions: 10",
  },
  {
    id: 2,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
  },
  {
    id: 3,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
  },
  {
    id: 4,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
  },
  {
    id: 5,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
  },
  {
    id: 6,
    quizTheme: "Name",
    quizDifficulty: "Difficulty",
    quizLength: "Questions",
  },
];

const challengeList = ["Fast Mode", "Survival", "Daily", "Random"];

function HomePage() {
  return (
    <div id="home-page-container">
      <div id="home-page-header">
        <p id="greeting">Hello, Jean!</p>
        <img src="src/assets/user-icon.png" />
      </div>
      <div id="quiz-select-container">
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
          {challengeList.map((type) => {
            return <Challenges key={type} challengeType={type} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

{
  /* <Link to="/">Home</Link> */
}
{
  /* <Link to="/quiz">Quiz</Link> */
}
