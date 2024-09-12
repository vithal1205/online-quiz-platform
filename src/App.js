// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizCreator from "./components/QuizCreator";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<QuizCreator />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/results/:quizId" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
