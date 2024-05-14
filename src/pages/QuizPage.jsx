import QuitButton from "../components/QuitButton";
import ScoreBoard from "../components/ScoreBoard";
import QuizTimer from "../components/QuizTimer";
import QuitConfirmWindow from "../components/QuitConfirmWindow";
import QuestionCard from "../components/QuestionCard";
import quizReducer from "../reducers/quizReducer";
import { useQuizData } from "../contexts/useQuizData";
import { useEffect, useReducer } from "react";
import {
  TIMER_RESET_SHUFFLE_ANSWERS,
  TIMER_ENDING,
  QUESTION_SETUP,
  CORRECT,
  WRONG,
  NEXT_QUESTION,
  TIMER_ONGOING,
  SET_TIMERID,
  TOGGLE_QUIT_BUTTON,
} from "../reducers/quizReducerActions";
import LivesCount from "../components/LivesCount";
import QuizResults from "../components/QuizResults";
import { useLoaderData } from "react-router-dom";
import { useProfile } from "../contexts/useProfile";

export default function QuizPage() {
  const { quizData } = useQuizData();
  const { profile } = useProfile();
  const dataFetched = useLoaderData();

  const initialQuizState = {
    data: dataFetched,
    length: dataFetched.length,
    currentQuestionNumber: 1,
    totalScore: 0,
    questionScore: 0,
    streakCount: 0,
    streakBonus: 1,
    maxStreak: 0,
    isStreakOn: false,
    goodAnswers: 0,
    timer: parseInt(quizData.quizTimer),
    timerID: 1,
    timeRemaining: parseInt(quizData.quizTimer),
    livesRemaining: quizData.lives,
    lifeManagement: 0,
    isQuitPushed: false,
    isFinished: false,
    answers: [],
    currentQuestion: {
      status: "Pending",
      timing: "Ongoing",
      text: "",
      incorrectAnswer1: {
        id: 1,
        text: "",
        isCorrect: false,
      },
      incorrectAnswer2: {
        id: 2,
        text: "",
        isCorrect: false,
      },
      incorrectAnswer3: {
        id: 3,
        text: "",
        isCorrect: false,
      },
      correctAnswer: {
        id: 4,
        text: "",
        isCorrect: true,
      },
    },
  };

  const [quizState, dispatch] = useReducer(quizReducer, initialQuizState);

  function clickCorrect() {
    dispatch({ type: CORRECT });
    clearInterval(quizState.timerID);
  }

  function clickWrong() {
    dispatch({ type: WRONG });
    clearInterval(quizState.timerID);
  }

  function handleQuitButton() {
    dispatch({ type: TOGGLE_QUIT_BUTTON });
  }

  useEffect(() => {
    dispatch({ type: QUESTION_SETUP });
  }, [quizState.currentQuestionNumber]);

  useEffect(() => {
    dispatch({ type: TIMER_RESET_SHUFFLE_ANSWERS });
  }, [quizState.currentQuestion.text]);

  useEffect(() => {
    switch (quizState.currentQuestion.timing) {
      case "Ongoing": {
        const timer1 = setInterval(() => {
          dispatch({ type: TIMER_ONGOING });
        }, 1000);
        dispatch({ type: SET_TIMERID, payload: timer1 });
        return () => {
          clearInterval(timer1);
        };
      }
      case "Time":
      case "Timeup": {
        const timer2 = setTimeout(() => {
          dispatch({ type: TIMER_ENDING });
        }, 1500);
        return () => {
          clearTimeout(timer2);
        };
      }
      case "Ending": {
        const timer3 = setTimeout(() => {
          dispatch({ type: NEXT_QUESTION });
        }, 3000);
        return () => {
          clearTimeout(timer3);
        };
      }
    }
  }, [quizState.currentQuestion.timing]);

  const quizPageStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundImage: "none" };
      case "Starry Sky":
        return { backgroundImage: "url('/src/assets/starry-sky.jpg')" };
      case "Night Jungle":
        return { backgroundImage: "url('/src/assets/night-jungle.jpg')" };
    }
  };

  return (
    <div id="quiz-page-container" style={quizPageStyle()}>
      <div id="quiz-info-container">
        <QuitButton
          isQuitPushed={quizState.isQuitPushed}
          handleQuitButton={handleQuitButton}
        />
        <ScoreBoard
          totalScore={quizState.totalScore}
          questionScore={quizState.questionScore}
          questionStatus={quizState.currentQuestion.status}
          questionTiming={quizState.currentQuestion.timing}
          isStreakOn={quizState.isStreakOn}
        />
        <QuizTimer
          timeRemaining={quizState.timeRemaining}
          questionTiming={quizState.currentQuestion.timing}
        />
      </div>
      {quizState.isQuitPushed && (
        <QuitConfirmWindow backOption={handleQuitButton} />
      )}
      <QuestionCard
        quizLength={quizState.length}
        currentQuestionNumber={quizState.currentQuestionNumber}
        questionStatus={quizState.currentQuestion.status}
        questionTiming={quizState.currentQuestion.timing}
        questionText={quizState.currentQuestion.text}
        answers={quizState.answers}
        clickCorrect={clickCorrect}
        clickWrong={clickWrong}
      />
      <div id="lives-remaining-container">
        {quizData.isSurvivalOn && (
          <LivesCount livesRemaining={quizState.livesRemaining} />
        )}
      </div>
      {quizState.isFinished && (
        <QuizResults
          score={quizState.totalScore}
          goodAnswers={quizState.goodAnswers}
          quizLength={quizState.length}
          streakCount={quizState.streakCount}
          maxStreak={quizState.maxStreak}
        />
      )}
    </div>
  );
}
