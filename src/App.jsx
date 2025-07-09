import { useState } from 'react'
import Quiz from './components/quiz'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz/>
    </>
  )
}

export default App
