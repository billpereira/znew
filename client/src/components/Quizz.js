import React from "react";

export const Quizz = () => {
  return (
    <div>
      <div className="question-title">Question 1 of 3 - Display CPU</div>
      <div className="question">
        <p>
          You may have heard that the
          mainframe is a big computer, and one thing you find in a computer is a
          processor.
        </p>

        <p>
          Let’s start out by finding out just what the situation is with this
          computer’s processors. To do this, we’re going to use the DISPLAY
          command, and the DISPLAY command can be used to show us all sorts of
          information, so we need to specify that we want the System
          Configuration Information, even more specifically, the CPU info.
          Putting it all together, the command we want to input looks like this:
        </p>

        <p><strong>DISPLAY M=CPU</strong></p>
      </div>
      <div className="answer">
      <p>How many CPUs do we have on our LPAR?
      </p>
        <input type="radio" name="cpu" value="a"/>1<br/>
        <input type="radio" name="cpu" value="b"/>3<br/>
        <input type="radio" name="cpu" value="c"/>5
      </div>
      <div className="question-confirm">
        <button>Confirm</button>
      </div>
    </div>
  );
};
