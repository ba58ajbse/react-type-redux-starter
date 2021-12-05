import React from 'react'
import '../assets/App.css'
import Todo from './Todo'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, React</h1>
      <Todo />
    </div>
  )
}

export default App
