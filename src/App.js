import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Which company does Elon Musk own?",
      answerOptions: [
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Apple", isCorrect: false },
        { answerText: "Tesla", isCorrect: true },
        { answerText: "Meta", isCorrect: false },
      ],
    },
    {
      questionText: "Where was Elon Musk born?",
      answerOptions: [
        { answerText: "USA", isCorrect: false },
        { answerText: "South Africa", isCorrect: true },
        { answerText: "Canada", isCorrect: false },
        { answerText: "Germany", isCorrect: false },
      ],
    },
    {
      questionText: "Which one is Elon Musk's first company?",
      answerOptions: [
        { answerText: "Telsa", isCorrect: false },
        { answerText: "Zip2", isCorrect: true },
        { answerText: "PayPal", isCorrect: false },
        { answerText: "SpaceX", isCorrect: false },
      ],
    },
    {
      questionText: "Which one is Elon Musk's favourite film of 2019?",
      answerOptions: [
        { answerText: "Spider-Man: Far From Home", isCorrect: false },
        { answerText: "Joker", isCorrect: false },
        { answerText: "Avengers: Endgame", isCorrect: false },
        { answerText: "Parasite", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };
  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  const renderComment = (score)=> {
    switch (score) {
      case 0:
        return "Please try again."
      case 1:
        return "A good try!"
      case 2:
        return "Half way!"
      case 3:
        return "Very close!"
      case 4:
        return "Wow! Are you Elon Musk?"
      default:
        return "" 
    }
  }

  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          <div>You scored {score} out of {questions.length}</div>
          <div>{renderComment(score)}</div>
          <div><button
            onClick={() => handleRestart()}
          >
            Restart
          </button></div>
        </div>

      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span> Question {currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
