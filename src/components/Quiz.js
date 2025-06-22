import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.js";

const Quiz =() => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const navigate = useNavigate();

    const handleAnswer = (answer) => {
        const isCorrect = answer === questions[currentQuestion].correctAnswer;
        if (isCorrect) setScore(score + 1);

        setUserAnswers([...userAnswers, { questionId : currentQuestion, answer }]);
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            navigate("/result", { state: { score: isCorrect ? score + 1: score, userAnswers: [...userAnswers, { questionId: currentQuestion, answer }] } });
        }
    };

    return (
        <div className="container quiz">
            <h2 className="question">{questions[currentQuestion].question}</h2>
            <div className="options">
                {questions[currentQuestion].options.map((opt, i) => (
                    <button className="option-btn" key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
                ))}
            </div>
            <p className="progress">
                Question {currentQuestion + 1} of {questions.length}</p>
        </div>
    );
};

export default Quiz;
// This code defines a Quiz component for a quiz application that allows users to answer multiple-choice questions and navigate to a results page.