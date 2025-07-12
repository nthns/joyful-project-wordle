import React from "react";

function GameOverBanner({ answer, guesses }) {
  if (answer === guesses[guesses.length - 1]) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in
          <strong> {guesses.length}</strong> guess{guesses.length > 1 && "es"}!
        </p>
      </div>
    );
  }
  if (guesses.length >= 6) {
    return (
      <div>
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      </div>
    );
  }
  return null;
}

export default GameOverBanner;
