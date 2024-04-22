import QuitButton from "../components/QuitButton";
import ScoreBoard from "../components/ScoreBoard";
import QuizTimer from "../components/QuizTimer";
import QuestionCard from "../components/QuestionCard";
import data from "../assets/randomVGQuiz.json";
import { useState, useEffect } from "react";

function QuizPage() {
  const [quiz, setQuiz] = useState({
    data: data,
    length: data.length,
    currentQuestion: 1,
    score: 0,
    timer: 15,
  });

  const [question, setQuestion] = useState({
    status: "Pending",
    timing: "Ongoing",
    text: quiz.data[quiz.currentQuestion - 1].question,
    incorrectAnswer1: {
      id: 1,
      text: quiz.data[quiz.currentQuestion - 1].incorrect_answers[0],
      isCorrect: false,
    },
    incorrectAnswer2: {
      id: 2,
      text: quiz.data[quiz.currentQuestion - 1].incorrect_answers[1],
      isCorrect: false,
    },
    incorrectAnswer3: {
      id: 3,
      text: quiz.data[quiz.currentQuestion - 1].incorrect_answers[2],
      isCorrect: false,
    },
    correctAnswer: {
      id: 4,
      text: quiz.data[quiz.currentQuestion - 1].correct_answer,
      isCorrect: true,
    },
  });

  const [answers, setAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(quiz.timer);
  const [timerID, setTimerID] = useState(1);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function shuffleAnswers() {
    setAnswers(
      shuffle([
        question.incorrectAnswer1,
        question.incorrectAnswer2,
        question.incorrectAnswer3,
        question.correctAnswer,
      ])
    );
  }
  function clearTimer() {
    console.log("clearTimer used", timerID);
    clearInterval(timerID);
  }
  function timingOngoing() {
    setQuestion({ ...question, timing: "Ongoing" });
  }
  function timingEnding() {
    setQuestion({ ...question, timing: "Ending" });
  }
  function timingFinished() {
    setQuestion({ ...question, timing: "Finished" });
  }
  function timingTimeup() {
    setQuestion({ ...question, status: "TIME'S UP!", timing: "Timeup" });
  }
  function clickCorrect() {
    setTimeRemaining(0);
    clearTimer();
    setQuestion({ ...question, status: "CORRECT!", timing: "Time" });
  }
  function clickWrong() {
    setTimeRemaining(0);
    clearTimer();
    setQuestion({ ...question, status: "WRONG!", timing: "Time" });
  }
  function questionSetUp() {
    console.log("Question set up");
    setQuestion({
      ...question,
      status: "Pending",
      timing: "Ongoing",
      timer: 15,
      text: quiz.data[quiz.currentQuestion - 1].question,
      incorrectAnswer1: {
        id: 1,
        text: quiz.data[quiz.currentQuestion - 1].incorrect_answers[0],
        isCorrect: false,
      },
      incorrectAnswer2: {
        id: 2,
        text: quiz.data[quiz.currentQuestion - 1].incorrect_answers[1],
        isCorrect: false,
      },
      incorrectAnswer3: {
        id: 3,
        text: quiz.data[quiz.currentQuestion - 1].incorrect_answers[2],
        isCorrect: false,
      },
      correctAnswer: {
        id: 4,
        text: quiz.data[quiz.currentQuestion - 1].correct_answer,
        isCorrect: true,
      },
    });
  }

  useEffect(() => {
    questionSetUp();
    shuffleAnswers();
  }, [quiz.currentQuestion]);

  useEffect(() => {
    if (question.timing === "Ongoing") {
      console.log("toto");
      setTimerID(
        setInterval(() => {
          setTimeRemaining((value) => {
            if (value <= 1) {
              clearTimer();
              timingTimeup();
              return 0;
            }
            console.log("Ongoing timer:", value - 1);
            return value - 1;
          });
        }, 1000)
      );
      return () => {
        clearTimer();
      };
    } else if (question.timing === "Time" || question.timing === "Timeup") {
      const timer = setTimeout(() => {
        console.log("Time's up");
        timingEnding();
      }, 2000);
      return () => {
        clearTimeout(timer);
        console.log("Cleared timer time");
      };
    } else if (question.timing === "Ending") {
      const timer = setTimeout(() => {
        console.log("Question over");
        timingFinished();
      }, 3000);
      return () => {
        clearTimeout(timer);
        console.log("Cleared timer ending");
      };
    }
  }, [question.timing]);

  // useEffect(() => {
  //   if (question.timing === "Time" || question.timing === "Timeup") {
  //     const timer = setTimeout(() => {
  //       console.log("Time's up");
  //       timingEnding();
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timer);
  //       console.log("Cleared timer time");
  //     };
  //   }
  // }, [question.timing]);

  // useEffect(() => {
  //   if (question.timing === "Ending") {
  //     const timer = setTimeout(() => {
  //       console.log("Question over");
  //       timingFinished();
  //     }, 3000);
  //     return () => {
  //       clearTimeout(timer);
  //       console.log("Cleared timer ending");
  //     };
  //   }
  // }, [question.timing]);

  return (
    <div id="quiz-page-container">
      <div id="quiz-info-container">
        <QuitButton />
        <ScoreBoard score={quiz.score} />
        <QuizTimer timeRemaining={timeRemaining} />
      </div>
      <QuestionCard
        quizLength={quiz.length}
        currentQuestion={quiz.currentQuestion}
        questionStatus={question.status}
        questionTiming={question.timing}
        questionText={question.text}
        answers={answers}
        clickCorrect={clickCorrect}
        clickWrong={clickWrong}
      />
      <div id="void-bottom"></div>
    </div>
  );
}

export default QuizPage;

String.fromHtmlEntities = function (string) {
  return (string + "").replace(/&#\d+;/gm, function (s) {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};
