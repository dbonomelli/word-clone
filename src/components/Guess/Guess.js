import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({letter, status}){

  const className = status? `cell ${status}` : `cell`

  return (
  <span 
  className={className}>
    {letter}
  </span>
)}


function Guess({answer, value}) {

  const res = checkGuess(value, answer);

  return (
    
<p className="guess">
    {range(5).map((num) => (
      <Cell 
        key={num} 
        letter={res ? res[num].letter : undefined}
        status={res ? res[num].status : undefined}
      />
      
    ))}
  </p>
  )
}

export default Guess;

/*    <p className="guess">
    {range(5).map((num) => (
      <span 
      key={num} 
      className="cell">
        {value ? value[num] : undefined}
      </span>
      
    ))}
  </p>*/