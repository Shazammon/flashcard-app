import React, { useState } from "react";
import './app.css'

import FlashcardList from "./FlashcardList";

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 3?",
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
  question: "Question 2",
    answer: 'Answer',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
]

export default App;
