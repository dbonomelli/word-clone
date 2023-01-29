import React from "react";
import { checkGuess } from "../../game-helpers";

function InputGuess({gameStatus, guess, setGuess, addGuesses}) {


  function guessWord(event){
    event.preventDefault();
    if (guess.length !== 5){
      //validation for word under 5, video replicates on numbers and it works on numbers not string : (
      window.alert("The word must be 5 letters long!")
      return;
    }

      addGuesses(guess)
      setGuess('')

  }

  return (
    <>
    <form onSubmit={guessWord} className="guess-input-wrapper">
      <label htmlFor="guess-input"> Enter Guess: </label>
      <input 
        disabled={gameStatus != 'running'}
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase())
        }}
        id="guess-input" 
        type="text"
        >
        
        </input>
    </form>
    </>
  )
}

export default InputGuess;
