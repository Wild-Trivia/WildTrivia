import { useContext } from "react";
import { QuizDataContext } from "./QuizDataContext";

export const useQuizData = () => useContext(QuizDataContext);
