import React from 'react'
import Flashcard from './Flashcard'

export default function Flashcard({flashcard}) {
  return (
    <div>
      {flashcard.question}
    </div>
  )
}
