// src/components/Quiz.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Timer from "./Timer";

function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("quizData"));
    if (savedQuiz && savedQuiz.title === quizId) {
      setQuiz(savedQuiz);
    }
  }, [quizId]);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === quiz.questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      navigate(`/results/${quizId}`, {
        state: { score, total: quiz.questions.length },
      });
    }
  };

  return quiz ? (
    <div>
      <h2>{quiz.title}</h2>
      <Timer />
      <h3>{quiz.questions[currentQuestionIndex].text}</h3>
      {quiz.questions[currentQuestionIndex].options.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelectedAnswer(option)}
          style={{
            backgroundColor: selectedAnswer === option ? "lightblue" : "",
          }}
        >
          {option}
        </button>
      ))}
      <button onClick={handleAnswerSubmit}>Submit Answer</button>
    </div>
  ) : (
    <p>Loading quiz...</p>
  );
}

export default Quiz;
