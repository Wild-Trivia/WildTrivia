// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import QuizDataProvider from "./contexts/QuizDataProvider.jsx";
import dailyData from "./assets/randomVGQuiz.json";
import { challengeFetcher } from "./assets/functions.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
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
  <QuizDataProvider>
    <RouterProvider router={router} />
  </QuizDataProvider>
  // </React.StrictMode>
);
