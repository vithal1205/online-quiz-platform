// src/components/Results.js
import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const { quizId } = useParams();
  const { score, total } = state;

  return (
    <div>
      <h2>{quizId} - Results</h2>
      <p>
        Your Score: {score} / {total}
      </p>
      <button onClick={() => (window.location.href = "/")}>
        Create Another Quiz
      </button>
    </div>
  );
}

export default Results;
