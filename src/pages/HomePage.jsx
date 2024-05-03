import QuickQuizButton from "../components/QuickQuizButton";
import Challenges from "../components/Challenges";
import ChallengeMenu from "../components/ChallengeMenu";
import quickQuizList from "../assets/qqlist.json";
import challengeList from "../assets/challist.json";

function HomePage() {
  return (
    <>
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
        <ChallengeMenu />
      </div>
    </>
  );
}

export default HomePage;
