import QuitButton from "../components/QuitButton";
import ScoreBoard from "../components/ScoreBoard";
import QuizTimer from "../components/QuizTimer";
import QuestionCard from "../components/QuestionCard";
import data from "../assets/randomVGQuiz.json";
import { useState, useEffect } from "react";

function QuizPage() {
  const [quizState, setQuizState] = useState({
    data: data,
    length: data.length,
    currentQuestionNumber: 1,
    score: 0,
    timer: 15,
    timerID: 1,
    timeRemaining: 15,
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
  });

  function decodeHTMLEntities(text) {
    let textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function shuffleAnswers() {
    setQuizState((value) => {
      return {
        ...value,
        answers: shuffle([
          quizState.currentQuestion.incorrectAnswer1,
          quizState.currentQuestion.incorrectAnswer2,
          quizState.currentQuestion.incorrectAnswer3,
          quizState.currentQuestion.correctAnswer,
        ]),
      };
    });
  }
  function clearTimer() {
    console.log("clearTimer used");
    clearInterval(quizState.timerID);
  }
  function timingEnding() {
    setQuizState((value) => {
      return {
        ...value,
        currentQuestion: { ...value.currentQuestion, timing: "Ending" },
      };
    });
  }
  function timingTimeup() {
    setQuizState((value) => {
      return {
        ...value,
        currentQuestion: {
          ...value.currentQuestion,
          status: "TIME'S UP!",
          timing: "Timeup",
        },
      };
    });
  }
  function clickCorrect() {
    const timeBonus = quizState.timeRemaining * 5;
    setTimeout(() => {
      setQuizState((value) => {
        return { ...value, score: value.score + 100 + timeBonus };
      });
    }, 2000);
    setQuizState((value) => {
      return { ...value, timeRemaining: 0 };
    });
    clearTimer();
    setQuizState((value) => {
      return {
        ...value,
        currentQuestion: {
          ...value.currentQuestion,
          status: "CORRECT!",
          timing: "Time",
        },
      };
    });
  }
  function clickWrong() {
    setQuizState((value) => {
      return { ...value, timeRemaining: 0 };
    });
    clearTimer();
    setQuizState((value) => {
      return {
        ...value,
        currentQuestion: {
          ...value.currentQuestion,
          status: "WRONG!",
          timing: "Time",
        },
      };
    });
  }
  function nextQuestion() {
    if (quizState.length === quizState.currentQuestionNumber) {
      setQuizState((value) => {
        return { ...value, currentQuestionNumber: 1 };
      });
    } else {
      setQuizState((value) => {
        return {
          ...value,
          currentQuestionNumber: value.currentQuestionNumber + 1,
        };
      });
    }
  }
  function questionSetUp() {
    console.log("Question set up");
    setQuizState((value) => {
      return {
        ...value,
        currentQuestion: {
          ...value.currentQuestion,
          status: "Pending",
          timing: "Ongoing",
          text: decodeHTMLEntities(
            quizState.data[quizState.currentQuestionNumber - 1].question
          ),
          incorrectAnswer1: {
            id: 1,
            text: decodeHTMLEntities(
              quizState.data[quizState.currentQuestionNumber - 1]
                .incorrect_answers[0]
            ),
            isCorrect: false,
          },
          incorrectAnswer2: {
            id: 2,
            text: decodeHTMLEntities(
              quizState.data[quizState.currentQuestionNumber - 1]
                .incorrect_answers[1]
            ),
            isCorrect: false,
          },
          incorrectAnswer3: {
            id: 3,
            text: decodeHTMLEntities(
              quizState.data[quizState.currentQuestionNumber - 1]
                .incorrect_answers[2]
            ),
            isCorrect: false,
          },
          correctAnswer: {
            id: 4,
            text: decodeHTMLEntities(
              quizState.data[quizState.currentQuestionNumber - 1].correct_answer
            ),
            isCorrect: true,
          },
        },
      };
    });
  }

  useEffect(() => {
    questionSetUp();
  }, [quizState.currentQuestionNumber]);

  useEffect(() => {
    shuffleAnswers();
    setQuizState((value) => {
      return { ...value, timeRemaining: quizState.timer };
    });
  }, [quizState.currentQuestion.text]);

  useEffect(() => {
    if (quizState.currentQuestion.timing === "Ongoing") {
      const timer1 = setInterval(() => {
        setQuizState((value) => {
          if (value.timeRemaining <= 1) {
            clearInterval(timer1);
            timingTimeup();
            return { ...value, timeRemaining: 0 };
          }
          console.log("Ongoing timer:", value.timeRemaining - 1);
          return { ...value, timeRemaining: value.timeRemaining - 1 };
        });
      }, 1000);
      setQuizState((value) => {
        return { ...value, timerID: timer1 };
      });
      return () => {
        clearInterval(timer1);
      };
    } else if (
      quizState.currentQuestion.timing === "Time" ||
      quizState.currentQuestion.timing === "Timeup"
    ) {
      const timer2 = setTimeout(() => {
        console.log("Time's up");
        timingEnding();
      }, 1500);
      return () => {
        clearTimeout(timer2);
        console.log("Cleared timer time");
      };
    } else if (quizState.currentQuestion.timing === "Ending") {
      const timer3 = setTimeout(() => {
        console.log("Question over");
        nextQuestion();
      }, 3000);
      return () => {
        clearTimeout(timer3);
        console.log("Cleared timer ending");
      };
    }
  }, [quizState.currentQuestion.timing]);

  return (
    <div id="quiz-page-container">
      <div id="quiz-info-container">
        <QuitButton />
        <ScoreBoard score={quizState.score} />
        <QuizTimer timeRemaining={quizState.timeRemaining} />
      </div>
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
      <div id="void-bottom"></div>
    </div>
  );
}

export default QuizPage;
