import { Link } from "react-router-dom";
import { useQuizData } from "../contexts/useQuizData";
import { useProfile } from "../contexts/useProfile";

export default function CustomQuizMenu() {
  const { quizData, setQuizData } = useQuizData();
  const { profile } = useProfile();

  const customQuizMenuAnimation = () => {
    if (quizData.isCustomButtonPushed) {
      return { transform: "translateY(0%)" };
    }
  };

  const handleVoidClick = () => {
    setQuizData((value) => {
      return {
        ...value,
        isCustomButtonPushed: false,
      };
    });
  };

  const handleThemeChange = (event) => {
    setQuizData((state) => {
      return { ...state, theme: event.target.value };
    });
  };

  const handleDifficultyChange = (event) => {
    setQuizData((state) => {
      return { ...state, difficulty: event.target.value };
    });
  };

  const handleAmountChange = (event) => {
    if (event.target.value < 5) {
      setQuizData((state) => {
        return { ...state, questionTotal: 5 };
      });
    } else if (event.target.value > 20) {
      setQuizData((state) => {
        return { ...state, questionTotal: 20 };
      });
    } else {
      setQuizData((state) => {
        return { ...state, questionTotal: event.target.value };
      });
    }
  };

  const handleTimerChange = (event) => {
    if (event.target.value < 10) {
      setQuizData((state) => {
        return { ...state, quizTimer: 10 };
      });
    } else if (event.target.value > 30) {
      setQuizData((state) => {
        return { ...state, quizTimer: 30 };
      });
    } else {
      setQuizData((state) => {
        return { ...state, quizTimer: event.target.value };
      });
    }
  };

  const borderStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { border: "2px solid #7b59da" };
      case "Starry Sky":
        return { border: "2px solid #0f5e5b" };
      case "Night Jungle":
        return { border: "2px solid #044c7f" };
    }
  };

  const launchButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: "#7b59dada" };
      case "Starry Sky":
        return { backgroundColor: "#0f5e5bda" };
      case "Night Jungle":
        return { backgroundColor: "#044c7fda" };
    }
  };

  const routeHandler = () => {
    switch (quizData.quizTheme) {
      case "Any":
        return `/quiz/${quizData.questionTotal}/Any/${quizData.difficulty}`;
      case "Books":
        return `/quiz/${quizData.questionTotal}/10/${quizData.difficulty}`;
      case "Films":
        return `/quiz/${quizData.questionTotal}/11/${quizData.difficulty}`;
      case "Music":
        return `/quiz/${quizData.questionTotal}/12/${quizData.difficulty}`;
      case "Television":
        return `/quiz/${quizData.questionTotal}/14/${quizData.difficulty}`;
      case "Video Games":
        return `/quiz/${quizData.questionTotal}/15/${quizData.difficulty}`;
      case "Science":
        return `/quiz/${quizData.questionTotal}/17/${quizData.difficulty}`;
      case "Sports":
        return `/quiz/${quizData.questionTotal}/21/${quizData.difficulty}`;
      case "Geography":
        return `/quiz/${quizData.questionTotal}/22/${quizData.difficulty}`;
      case "History":
        return `/quiz/${quizData.questionTotal}/23/${quizData.difficulty}`;
      case "Comics":
        return `/quiz/${quizData.questionTotal}/29/${quizData.difficulty}`;
      case "Manga/Anime":
        return `/quiz/${quizData.questionTotal}/31/${quizData.difficulty}`;
      case "Cartoons":
        return `/quiz/${quizData.questionTotal}/32/${quizData.difficulty}`;
    }
  };

  return (
    <div id="custom-quiz-menu-container" style={customQuizMenuAnimation()}>
      <div className="grey-void" onClick={handleVoidClick} />
      <div id="custom-quiz-menu">
        <div id="custom-quiz-data-container">
          <div id="theme-selection">
            <label>Theme:</label>
            <select
              style={borderStyle()}
              value={quizData.theme}
              onChange={handleThemeChange}
            >
              <option value="Any">Any</option>
              <option value="Books">Books</option>
              <option value="Films">Films</option>
              <option value="Music">Music</option>
              <option value="Television">Television</option>
              <option value="Video Games">Video Games</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Comics">Comics</option>
              <option value="Manga/Anime">Manga/Anime</option>
              <option value="Cartoons">Cartoons</option>
            </select>
          </div>
          <div id="difficulty-selection">
            <label>Difficulty:</label>
            <select
              style={borderStyle()}
              value={quizData.difficulty}
              onChange={handleDifficultyChange}
            >
              <option value="Any">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div id="amount-selection">
            <label>Number of Questions:</label>
            <input
              style={borderStyle()}
              type="number"
              min="5"
              max="20"
              value={quizData.questionTotal}
              onChange={handleAmountChange}
            />
          </div>
          <div id="timer-selection">
            <label>Timer: {quizData.quizTimer}</label>
            <input
              type="range"
              min="10"
              max="30"
              value={quizData.quizTimer}
              step="1"
              onChange={handleTimerChange}
            />
          </div>
        </div>
        <div id="custom-quiz-launch-container">
          <Link
            to={routeHandler()}
            id="custom-quiz-launch-button"
            onClick={handleVoidClick}
            style={launchButtonStyle()}
          >
            Launch my custom quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
