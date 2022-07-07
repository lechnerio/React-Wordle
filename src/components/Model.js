import React from 'react'

export default function Model({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      { isCorrect && (
        <div>
          <h1>Gratulation! 🎉</h1>
          <p className="solution">{ solution }</p>
          <p>Du hast die Antwort mit 
            <b> { turn } Versuch{ turn === 1 ? '' : 'en' }</b>  gefunden!</p>
        </div>
      )}

      { !isCorrect && (
        <div>
          <h1>Oh No! 😥</h1>
          <p className="solution">{ solution }</p>
          <p>Du hast alle deine { turn } Versuche verwendet! <br/>
          Viel Glück beim nächsten Mal.</p>
        </div>
      )}
    </div>
  )
}
