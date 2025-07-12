import React from "react";

function GuessInput({ answer, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ tentativeGuess });
          handleSubmitGuess(tentativeGuess);
          setTentativeGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={tentativeGuess}
          type="text"
          title="5 letter word"
          required
          pattern="[A-Za-z]{5,5}"
          minLength="5"
          maxLength="5"
          onBeforeInput={(e) => {
            if (!/^[A-Za-z]+$/.test(e.data)) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            setTentativeGuess(e.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
