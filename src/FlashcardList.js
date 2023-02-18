import React from 'react'

export default function FlashcardList({ flashcards }) {
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
      
    </div>
  )
}
