import React, { useState }from 'react' 


export default function Flashcard({flashcard}) {
  const [flip, setFlip] = useState(false)

  return (
    <div>
      {flashcard.question}
    </div>
  )
}
