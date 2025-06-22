import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questions from "../data/questions";

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { score, userAnswers } = location.state || { score: 0, userAnswers: [] };

    return (
        <div className="container result">
            <h1 className="title">🏁 Quiz Completed!</h1>
            <h2 className="score">Your Score: {score}/{questions.length}</h2>
            <h3 className="review-title">Review Your Answers</h3>
            <ul className="review-list">
                {questions.map((q, idx) => {
                    const userAns = userAnswers.find(a => a.questionId === idx)?.answer;
                    return (
                        <li className="review-item" key={idx}>
                            <strong>{q.question}</strong><br />
                            <span className = {userAns === q.correctAnswer ? "correct" : "incorrect"}>
                                Your Answer: {userAns || "Not answered"}<br />
                            </span><br />
                            Correct Answer: < span className="correct">{q.correctAnswer}</span>
                        </li>
                    );
                })}
            </ul>
            <button className="btn" onClick={() => navigate("/")}>Play Again</button>
        </div>
    );
};
export default Result;
// This code defines a Result component for a quiz application that displays the user's score, allows them to review their answers, and provides an option to play again.