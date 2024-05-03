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
} from "./quizReducerActions";
import { shuffle, decodeHTMLEntities } from "../assets/functions";

export default function quizReducer(state, action) {
  switch (action.type) {
    case TIMER_RESET_SHUFFLE_ANSWERS:
      return {
        ...state,
        timeRemaining: state.timer,
        answers: shuffle([
          state.currentQuestion.incorrectAnswer1,
          state.currentQuestion.incorrectAnswer2,
          state.currentQuestion.incorrectAnswer3,
          state.currentQuestion.correctAnswer,
        ]),
      };
    case TIMER_ENDING:
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          timing: "Ending",
        },
      };
    case QUESTION_SETUP:
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          status: "Pending",
          timing: "Ongoing",
          text: decodeHTMLEntities(
            state.data[state.currentQuestionNumber - 1].question
          ),
          incorrectAnswer1: {
            id: 1,
            text: decodeHTMLEntities(
              state.data[state.currentQuestionNumber - 1].incorrect_answers[0]
            ),
            isCorrect: false,
          },
          incorrectAnswer2: {
            id: 2,
            text: decodeHTMLEntities(
              state.data[state.currentQuestionNumber - 1].incorrect_answers[1]
            ),
            isCorrect: false,
          },
          incorrectAnswer3: {
            id: 3,
            text: decodeHTMLEntities(
              state.data[state.currentQuestionNumber - 1].incorrect_answers[2]
            ),
            isCorrect: false,
          },
          correctAnswer: {
            id: 4,
            text: decodeHTMLEntities(
              state.data[state.currentQuestionNumber - 1].correct_answer
            ),
            isCorrect: true,
          },
        },
      };
    case CORRECT:
      return {
        ...state,
        timeRemaining: 0,
        lifeLoss: 0,
        questionScore: 100 + state.timeRemaining * 5,
        currentQuestion: {
          ...state.currentQuestion,
          status: "CORRECT!",
          timing: "Time",
        },
      };
    case WRONG:
      return {
        ...state,
        timeRemaining: 0,
        lifeLoss: 1,
        questionScore: 0,
        currentQuestion: {
          ...state.currentQuestion,
          status: "WRONG!",
          timing: "Time",
        },
      };
    case NEXT_QUESTION: {
      if (
        state.length === state.currentQuestionNumber ||
        (state.livesRemaining === 1 && state.lifeLoss === 1)
      ) {
        return {
          ...state,
          totalScore: state.totalScore + state.questionScore,
          livesRemaining: state.livesRemaining - state.lifeLoss,
          currentQuestionNumber: 1,
        };
      } else {
        return {
          ...state,
          totalScore: state.totalScore + state.questionScore,
          livesRemaining: state.livesRemaining - state.lifeLoss,
          currentQuestionNumber: state.currentQuestionNumber + 1,
        };
      }
    }
    case TIMER_ONGOING: {
      if (state.timeRemaining <= 1) {
        clearInterval(state.timerID);
        return {
          ...state,
          timeRemaining: 0,
          lifeLoss: 1,
          questionScore: 0,
          currentQuestion: {
            ...state.currentQuestion,
            status: "TIME'S UP!",
            timing: "Timeup",
          },
        };
      }
      return { ...state, timeRemaining: state.timeRemaining - 1 };
    }
    case SET_TIMERID:
      return { ...state, timerID: action.payload };
    case TOGGLE_QUIT_BUTTON:
      return { ...state, isQuitPushed: !state.isQuitPushed };
  }
}
