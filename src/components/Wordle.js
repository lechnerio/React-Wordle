import React from 'react'
import { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Model from './Model'

export default function Wordle({ solution }) {

  const { currentGuess, handleKeyup, guesses, isCorrect, usedKeys, turn } = useWordle(solution)
  const [showModel, setShowModel] = useState(false)


  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if(isCorrect){
      setTimeout(() => { setShowModel(true)}, 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    
    if(turn > 5){
      setTimeout(() => { setShowModel(true)}, 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect])


  return (
    <div>
      {/* <div><b>solution:</b> {solution}</div> */}
      {/* <div><b>current guess:</b> { currentGuess }</div> */}

      <Grid 
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn} />

      <Keypad usedKeys={usedKeys} />

      {showModel && <Model isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}
