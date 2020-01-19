import React, { useState, useEffect } from "react";
import { QuizzNavigation } from "./QuizzNavigation";
import { Quizz } from "./Quizz";
import { Console } from "./Console";
import { Link } from "react-router-dom";

export const QuizzContainer = ({quizzFilter=""}) => {
  console.log(quizzFilter)
  const [hasError, setErrors] = useState(false);
  const [quizzQuestions, setQuizzQuestions] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // let group = "architecture";

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/QuizzQuestion");
    res
      .json()
      .then(res => {
        let filteredQuestions = res.filter(
          question => question.group === quizzFilter.category
        );
        setQuizzQuestions(filteredQuestions);
      })
      .catch(err => setErrors(err));
  };

  const nextQuestion = () => {
    // e.event.preventDefault();
    currentQuestion === quizzQuestions.lenght-1
    ? setCurrentQuestion(1)
    : setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion)
    console.log(quizzQuestions.lenght)
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(quizzQuestions);
  }, [quizzQuestions]);
  return (
    <div className="quiz-content">
      <h2><Link to="/roadmap">Voltar -</Link> Part 1 - {quizzFilter.title}</h2>
      <h3>
        <span>Welcome to the mainframe!</span>
      </h3>
      <p className="info">
        For these first challenges, we’re going to show you a few interesting
        things about the mainframe. To enter a command, use the right side of
        the screen.{" "}
      </p>
      <div className="quiz-container">
        <div className="quiz-column">
          <Quizz
            currentQuestion={currentQuestion}
            quizzQuestions={quizzQuestions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            nextQuestion={nextQuestion}
          />
        </div>
        <div className="console-column">
          <Console />
        </div>
      </div>
      <QuizzNavigation />
    </div>
  );
};
