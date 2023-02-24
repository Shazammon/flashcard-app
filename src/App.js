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
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), answer]
        
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
      console.log(res.data.results)
    })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

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
