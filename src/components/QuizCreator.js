// src/components/QuizCreator.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizCreator() {
  const [quiz, setQuiz] = useState({ title: "", questions: [] });
  const [question, setQuestion] = useState({
    text: "",
    options: [],
    correct: "",
  });
  const [optionText, setOptionText] = useState("");
  const navigate = useNavigate();

  const addOption = () => {
    setQuestion({ ...question, options: [...question.options, optionText] });
    setOptionText("");
  };

  const addQuestion = () => {
    setQuiz({ ...quiz, questions: [...quiz.questions, question] });
    setQuestion({ text: "", options: [], correct: "" });
  };

  const handleQuizSubmit = () => {
    localStorage.setItem("quizData", JSON.stringify(quiz));
    navigate(`/quiz/${quiz.title}`);
  };

  return (
    <div>
      <h2>Create a New Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Question Text"
        value={question.text}
        onChange={(e) => setQuestion({ ...question, text: e.target.value })}
      />
      <input
        type="text"
        placeholder="Option"
        value={optionText}
        onChange={(e) => setOptionText(e.target.value)}
      />
      <button onClick={addOption}>Add Option</button>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Correct Answer"
        value={question.correct}
        onChange={(e) => setQuestion({ ...question, correct: e.target.value })}
      />
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleQuizSubmit}>Create Quiz</button>

      <h3>Current Questions:</h3>
      <ul>
        {quiz.questions.map((q, index) => (
          <li key={index}>{q.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuizCreator;
