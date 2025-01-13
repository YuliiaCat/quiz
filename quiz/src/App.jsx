import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import { fetchQuestions } from './utils/fetchQuestions'
import { useEffect } from 'react'

function App() {
const [questions, setQuestions] = useState([]);

const getQuestions = async () => {
  try {
    const questionsData = await fetchQuestions();
    setQuestions(questionsData);
  } catch (err) {
    console.log('Error fetching questions:', err);
  }
}

useEffect(() => {
  getQuestions();
}, [])

  return (
    <>
      <Quiz questions={questions} />
    </>
  )
}

export default App
