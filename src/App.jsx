import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        
      <h1> count is {count} </h1>
    
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount((count) => count = 0)}>Reset</button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
  )
}

export default App