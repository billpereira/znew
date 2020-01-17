import React, { useState, useEffect } from "react";
// import api from "../helpers/api";

export const Quizz = ({
  currentQuestion,
  quizzQuestions,
  selectedOption,
  setSelectedOption, nextQuestion
}) => {
  const handleSelectedOption = changeEvent => {
    setSelectedOption(changeEvent.target.value);
  };
  return (
    <>
      {quizzQuestions ? (
        <div>
          <div className="question-title">
            {`Question ${currentQuestion} of ${quizzQuestions.length} - ${
              quizzQuestions[currentQuestion - 1].title
            }`}
          </div>
          <div className="question">
            <p>{quizzQuestions[currentQuestion - 1].description}</p>
            <p>
              <strong>{quizzQuestions[currentQuestion - 1].hint}</strong>
            </p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="answer">
              <p>{quizzQuestions[currentQuestion - 1].question}</p>
              {quizzQuestions[currentQuestion - 1].options.map(option => (
                <div
                  key={option}
                  className="quizz-option"
                  style={
                    (option === selectedOption) &
                    (option === quizzQuestions[currentQuestion - 1].rightAnswer)
                      ? { borderColor: "green" }
                      : (option === selectedOption) &
                        (option !==
                          quizzQuestions[currentQuestion - 1].rightAnswer)
                      ? { borderColor: "red" }
                      : null
                  }
                >
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleSelectedOption}
                  />
                  {option}
                  <br />
                </div>
              ))}
            </div>
            <div className="question-confirm">
              <button onClick={()=>nextQuestion()}>Next</button>
            </div>
          </form>
        </div>
      ) : (
        "Loading Questions..."
      )}
    </>
  );
};
