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
      <div className="max-w-lg mx-auto mt-10 bg-transparent text-white rounded-xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">🎉 Résultats du Quiz</h3>
        <p className="text-lg mb-6">
          Vous avez obtenu{" "}
          <span className="font-bold text-green-400">{score}</span> /{" "}
          <span className="font-bold">{totalQuestions}</span> !
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          onClick={restartQuiz}
        >
          Recommencer le Quiz
        </button>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="w-full mx-auto mt-10 text-white rounded-xl">
      <h3 className="text-2xl font-bold mb-4 text-center">🎬 Quiz Cinéma</h3>
      <div className="mb-4 text-center">
        <span className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
          Question {currentQuestion + 1} / {totalQuestions}
        </span>
      </div>
      <h4 className="text-lg font-medium mb-5 text-center">
        {question.question}
      </h4>
      <div className="flex flex-col gap-4 mt-5">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="bg-gray-700/20 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition w-full border-2 border-gray-700 hover:border-red-600"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
