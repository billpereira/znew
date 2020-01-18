import React, { useState } from "react";
import api from "../helpers/api";

export const Console = () => {
  const [command, setCommand] = useState({ command: "", answer: "" });

  const handleChange = e => {
    setCommand({ ...command, [e.target.id]: e.target.value });
    // console.log(command);
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    if (command.command === "") {
      setCommand({ command: "", answer: "" });
    } else {
      setCommand({ command: "", answer: {data:["Loading..."]} });
      console.log('esperando a resposta')
      let commandAnswer = await api.post("/console", {
        command: command.command
      });
      setCommand({ command: "", answer: commandAnswer });
      // console.log(command);
    }

    // send to server with e.g. `window.fetch`
  };

  return (
    <div>
      <div className="command-area">
        {command.answer.data &&
          command.answer.data.map((item, i) => {
            return <p key={i}>{item.replace(/ /g, "\u00a0")}</p>;
          })}
      </div>
      <div className="command-input">
        <form onSubmit={onFormSubmit}>
          <input
            id="command"
            type="text"
            placeholder=""
            onChange={handleChange}
            value={command.command}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
