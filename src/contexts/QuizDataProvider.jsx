import PropTypes from "prop-types";
import { useState } from "react";
import { QuizDataContext } from "./QuizDataContext";

export default function QuizDataProvider({ children }) {
  const [quizData, setQuizData] = useState({
    isChallengeButtonPushed: false,
    quizMode: "Default",
    questionTotal: 10,
    quizTimer: 15,
    isSurvivalOn: false,
    lives: 500,
  });

  return (
    <QuizDataContext.Provider value={{ quizData, setQuizData }}>
      {children}
    </QuizDataContext.Provider>
  );
}

QuizDataProvider.propTypes = {
  children: PropTypes.any,
};
