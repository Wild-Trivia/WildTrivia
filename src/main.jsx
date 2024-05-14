// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import QuizDataProvider from "./contexts/QuizDataProvider.jsx";
import dailyData from "./assets/randomVGQuiz.json";
import qqlist from "./assets/qqlist.json";
import colorList from "./assets/colorList.json";
import {
  challengeFetcher,
  quickQuizRandomizer,
  quizFetcher,
} from "./assets/functions.js";
import ProfileProvider from "./contexts/ProfileProvider.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => quickQuizRandomizer(qqlist, colorList),
      },
      {
        path: "/quiz/:amount/:category/:difficulty",
        element: <QuizPage />,
        loader: ({ params }) =>
          quizFetcher(params.amount, params.category, params.difficulty),
      },
      {
        path: "/challenges/fastmode",
        element: <QuizPage />,
        loader: () => challengeFetcher(20),
      },
      {
        path: "/challenges/survival",
        element: <QuizPage />,
        loader: () => challengeFetcher(40),
      },
      {
        path: "/challenges/daily",
        element: <QuizPage />,
        loader: () => dailyData,
      },
      {
        path: "/challenges/random",
        element: <QuizPage />,
        loader: () => challengeFetcher(15),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ProfileProvider>
    <QuizDataProvider>
      <RouterProvider router={router} />
    </QuizDataProvider>
  </ProfileProvider>
  // </React.StrictMode>
);
