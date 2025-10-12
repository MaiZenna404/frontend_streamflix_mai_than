import { useState } from "react";
import { quizQuestions } from "../api/localData/quizQuestions";

export default function Quiz() {
  const totalQuestions = quizQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const score = userAnswers.filter(
      (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;
    return (
      <div>
        <h3>Résultats du Quiz</h3>
        <p>
          Vous avez obtenu {score}/{totalQuestions} !
        </p>
        <button onClick={restartQuiz}>Recommencer le Quiz</button>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div>
      <h3>Quiz Cinéma - Testez vos connaissances !</h3>
      <p>
        Question {currentQuestion + 1}/{totalQuestions}
      </p>
      <h4>{question.question}</h4>
      <div>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
