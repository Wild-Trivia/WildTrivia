import QuickQuizButton from "../components/QuickQuizButton";
import Challenges from "../components/Challenges";
import ChallengeMenu from "../components/ChallengeMenu";
import quickQuizList from "../assets/qqlist.json";
import challengeList from "../assets/challengeList.json";
import { useProfile } from "../contexts/useProfile";
import ProfileMenu from "../components/ProfileMenu";

export default function HomePage() {
  const { profile, setProfile } = useProfile();

  const profileMenuToggle = () => {
    setProfile((value) => {
      return {
        ...value,
        isMenuButtonPushed: !value.isMenuButtonPushed,
      };
    });
  };

  const homePageStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundImage: "none" };
      case "Starry Sky":
        return { backgroundImage: "url('../src/assets/starry-sky.jpg')" };
      case "Night Jungle":
        return { backgroundImage: "url('../src/assets/night-jungle.jpg')" };
    }
  };

  const greetingStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "black" };
      case "Starry Sky":
      case "Night Jungle":
        return { color: "white" };
    }
  };

  const quizSelectStyle = () => {
    if (profile.isMenuButtonPushed && profile.theme === "Classic") {
      return { transform: "translateY(39%)", backgroundColor: "#7b59da" };
    } else if (!profile.isMenuButtonPushed && profile.theme === "Classic") {
      return { backgroundColor: "#7b59da" };
    } else if (profile.isMenuButtonPushed && profile.theme !== "Classic") {
      return { transform: "translateY(39%)", backgroundColor: "#7b59da00" };
    } else if (!profile.isMenuButtonPushed && profile.theme !== "Classic") {
      return { backgroundColor: "#7b59da00" };
    }
  };

  const quizCreationButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "#7b59da" };
      case "Starry Sky":
        return { color: "#00688b" };
      case "Night Jungle":
        return { color: "#044c7f" };
    }
  };

  return (
    <div id="home-page-container" style={homePageStyle()}>
      <div id="home-page-header">
        <p id="greeting" style={greetingStyle()}>
          Hello, {profile.profileName}!
        </p>
        <button id="profile-button" onClick={profileMenuToggle}>
          <img src="src/assets/user-icon.png" />
        </button>
      </div>

      <div id="quiz-select-container" style={quizSelectStyle()}>
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
          <button id="quiz-creation-button" style={quizCreationButtonStyle()}>
            Create My Quiz
          </button>
        </div>
        <div className="title-box">
          <p className="quiz-select-title">Challenges</p>
        </div>
        <div id="challenges-box">
          {challengeList.map((challenge) => {
            return <Challenges key={challenge.id} challenge={challenge} />;
          })}
        </div>
      </div>
      <ChallengeMenu />
      <ProfileMenu profileMenuToggle={profileMenuToggle} />
    </div>
  );
}
