import React, { useState, useEffect } from "react";
import './app.css'
import FlashcardList from "./FlashcardList";
import axios from 'axios'

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  useEffect(() => {
    axios
    .get(`https://opentdb.com/api.php?amount=10`)
    .then(res => {
      res.data.results.map((questionItem, index) => {
        return {
          id: `${index}-${Date.now()}`,
          question: questionItem.question,
          answer: ,
          options: 
        }
      })
      console.log(res.data.results)
    })
  }, [])

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
