// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfileProvider from "./contexts/ProfileProvider.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ProfileProvider>
    <RouterProvider router={router} />
  </ProfileProvider>
  // </React.StrictMode>
);
