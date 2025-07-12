import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, value }) {
  const result = value ? checkGuess(value, answer) : null;

  if (!result) {
    return (
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className="cell"></span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${result[num].status || ""}`}>
          {result[num].letter || " "}
        </span>
      ))}
    </p>
  );
}

export default Guess;
