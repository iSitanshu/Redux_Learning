import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [{
    id:1,
    text: "Demo"
  }]
}

export const counterSlice= createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: Date.now(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: () => {}
    }
})

export const { addTodo, removeTodo, updateTodo } = counterSlice.actions

export default counterSlice.reducer