import React, { useState } from "react";
import Flashcard from "./Flashcard";
import FlashcardList from "./FlashcardList";

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  return (
<h1>Hello World</h1>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
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
