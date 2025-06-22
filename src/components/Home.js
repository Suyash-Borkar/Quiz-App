import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className ="container home">
            <h1 className="title">🎓 Welcome to the Quiz App</h1>
            <p className="subtitle">Test your knowledge with fun MCQs!</p>
            <button className="btn" onClick={() => navigate("/quiz")}>Start Quiz</button>
        </div>
    )
}

export default Home;
// This code defines a simple Home component for a quiz application.