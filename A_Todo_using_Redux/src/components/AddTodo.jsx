import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../features/counter/counterSlice'

const AddTodo = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.counter.todos)

    const addevent = (e) => {
        setText(e.target.value)
    }

  return (
    <div className='flex flex-col p-11 justify-center text-center w-auto gap-10'>
      <h1 className='text-3xl'>Todo List using React Redux</h1>
      <div>
      <input type="text"
      className='p-2 w-2/3 border-2 border-black'
      placeholder='Enter text'
      onChange={addevent}
      />
      <button
      className='bg-green-400 p-2 border-black border-2'
      onClick={()=>dispatch(addTodo(text))}
      >
      Add
      </button>
      </div>
    </div>
  )
}

export default AddTodo