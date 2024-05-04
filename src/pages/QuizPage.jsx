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
import { useLoaderData } from "react-router-dom";

function QuizPage() {
  const { quizData } = useQuizData();
  const dataFetched = useLoaderData();

  const initialQuizState = {
    data: dataFetched,
    length: dataFetched.length,
    currentQuestionNumber: 1,
    totalScore: 0,
    questionScore: 0,
    timer: quizData.quizTimer,
    timerID: 1,
    timeRemaining: quizData.quizTimer,
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

  return (
    <div id="quiz-page-container">
      <div id="quiz-info-container">
        <QuitButton
          isQuitPushed={quizState.isQuitPushed}
          handleQuitButton={handleQuitButton}
        />
        <ScoreBoard score={quizState.totalScore} />
        <QuizTimer timeRemaining={quizState.timeRemaining} />
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
    </div>
  );
}

export default QuizPage;
