import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/counter/counterSlice'

const TodoItem = () => {
    const todos = useSelector(state => state.counter.todos)
    const dispatch = useDispatch()
    console.log(todos)

  return (
    <div>
        {todos.map((todo)=>
            <div className='flex justify-between mx-40'>
            <h1 key={todo.id} className='flex flex-col p-11 gap-11'>{todo.text}</h1>
            <div className='flex gap-10'>
            <button className='border-black' onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            <button>Update</button>
            </div>
            </div>
        )}
    </div>
  )
}

export default TodoItem