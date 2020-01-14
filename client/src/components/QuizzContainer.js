import React from "react";
import {QuizzNavigation} from './QuizzNavigation'
import {Quizz} from './Quizz'
import { Console } from "./Console";

export const QuizzContainer = () => {
  return (
    <div className="quiz-content">
      <h2>Part 1 - Architecture</h2>
      <h3><span>Welcome to the mainframe!</span></h3>
      <p className="info">For these first challenges, we’re going to
          show you a few interesting things about the mainframe. To enter a
          command, use the right side of the screen. </p>
      <div className="quiz-container">
        <div className="quiz-column"><Quizz /></div>
        <div className="console-column"><Console /></div>
      </div>
      <QuizzNavigation />
    </div>
  );
};
