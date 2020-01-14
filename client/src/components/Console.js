import React from "react";

export const Console = () => {
  const answer = `
  SF031I CONSOLE A99949 ACTIVATED                                                \n
   M=CPU                                                                         \n
  EE174I 15.51.43 DISPLAY M 855                                                  \n
  ROCESSOR STATUS                                                                \n
  D  CPU                  SERIAL                                                 \n
  0  +                     011DF73906                                            \n
  1  +                     011DF73906                                            \n
  PC ND = 003906.M04.IBM.02.0000000F1DF7                                         \n
  PC SI = 3906.785.IBM.02.00000000000F1DF7                                       \n
          Model: M04                                                             \n
  PC ID = 00                                                                     \n
  PC NAME = CPC_UNKNOWN_NAME                                                     \n
   ONLINE    - OFFLINE    . DOES NOT EXIST    W WLM-MANAGED                      \n`;

  return (
    <div>
      <div className="command-area">
        {answer.split("\n").map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
      <div className="command-input">
        <input></input>
      </div>
    </div>
  );
};
