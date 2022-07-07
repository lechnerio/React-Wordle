import React from 'react'

export default function Row({ guess, currentGuess }) {

  if( guess ){
    return(
      <div className="row past">
        {guess.map((l, i)=>{
          return <div key={i} className={`letter ${l.color}`}>{l.key}</div>
        })}
      </div>
    )
  }

  if( currentGuess ){
    let letters = currentGuess.split('')

    return(
      <div className="row current">
        
        {letters.map((l, i)=>{
          return <div key={i} className={`filled ${l}`}>{l}</div>
        })}
        
        {[...Array(5 - letters.length)].map((l, i)=>{
          return <div key={i} className="empty">&nbsp;</div>
        })}

      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
