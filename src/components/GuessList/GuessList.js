import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessList({ guesses, answer }) {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} answer={answer} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessList;
