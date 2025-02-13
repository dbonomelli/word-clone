import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function ListGuest({answer, guessList}) {
  return (
    <div className="guess-result">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        
         <Guess answer={answer} key={num} value={guessList[num]} />
         
       ))}
    </div>
  );
}

export default ListGuest;
