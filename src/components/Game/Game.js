import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import ListGuest from '../ListGuest/ListGuest';
import InputGuess from '../InputGuess/InputGuess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  
  const [guess, setGuess] = React.useState('')
  const [guessList, setGuessList] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')


  function addGuesses(guess){
    const nextGuess = [...guessList, guess]
    setGuessList(nextGuess)
    if (guess === answer){
      setGameStatus('won')
    }else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }

  return (
    <>
      {gameStatus}
      <ListGuest answer={answer} guessList={guessList}/>
      <InputGuess gameStatus={gameStatus} guess={guess} addGuesses={addGuesses} setGuess={setGuess}/>
      {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guessList.length}></WonBanner>
      )}
      {gameStatus === 'lost' && (
      <LostBanner answer={answer}></LostBanner>
      )}
    </>
  )
}

export default Game;
