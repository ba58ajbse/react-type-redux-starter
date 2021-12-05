import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../store'
import { TodoType } from '../../interfaces/interface'

const initialState: TodoType = {
  todoInfo: {
    userId: 0,
    id: 0,
    title: 'init',
    completed: false,
  },
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    show(state) {
      return {
        ...state.todoInfo,
        todoInfo: {
          userId: 2,
          id: 3,
          title: 'show',
          completed: true,
        },
      }
    },
    getTodo(state, action: PayloadAction<TodoType>) {
      const { todoInfo } = action.payload
      return {
        ...state.todoInfo,
        todoInfo: {
          userId: todoInfo.userId,
          id: todoInfo.id,
          title: todoInfo.title,
          completed: todoInfo.completed,
        },
      }
    },
  },
})

export const { show, getTodo } = todoSlice.actions

export const getTodoAsync = (id: number): AppThunk => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const todo: TodoType = {
        todoInfo: {
          userId: data.userId,
          id: data.id,
          title: data.title,
          completed: data.completed,
        },
      }
      dispatch(getTodo(todo))
    })
    .catch((error) => console.log(error))
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectTodo = (state: RootState) => state.todo.todoInfo

export default todoSlice.reducer
