import {
  SHUFFLE_ANSWERS,
  TIMER_ENDING,
  QUESTION_SETUP,
  TIME_BONUS,
  CORRECT,
  WRONG,
  SCORE,
  NEXT_QUESTION,
  FIRST_QUESTION,
  RESET_TIMER,
} from "./quizReducerActions";
import { shuffle, decodeHTMLEntities } from "../assets/functions";

export default function quizReducer(state, action) {
  switch (action.type) {
    case SHUFFLE_ANSWERS:
      return {
        ...state,
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
          status: "TIME'S UP!",
          timing: "Timeup",
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
    case TIME_BONUS:
      return { ...state, timeBonus: state.timeRemaining * 5 };
    case CORRECT:
      return {
        ...state,
        timeRemaining: 0,
        questionScore: 100 + state.timeBonus,
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
        questionScore: 0,
        currentQuestion: {
          ...state.currentQuestion,
          status: "WRONG!",
          timing: "Time",
        },
      };
    case SCORE:
      return { ...state, totalScore: state.totalScore + state.questionScore };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    case FIRST_QUESTION:
      return { ...state, currentQuestionNumber: 1 };
    case RESET_TIMER:
      return { ...state, timeRemaining: state.timer };
  }
}
