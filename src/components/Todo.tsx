import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TodoShow from './TodoShow'
import { show, getTodoAsync } from '../store/slices/todoSlice'

const Todo: React.FC = () => {
  const [num, setNum] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button type="button" onClick={() => dispatch(getTodoAsync(Number(num)))}>
        get
      </button>
      <button type="button" onClick={() => dispatch(show())}>
        show
      </button>
      <TodoShow />
    </div>
  )
}

export default Todo
