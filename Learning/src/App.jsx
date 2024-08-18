import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementk, incrementk } from './feature/counter'

const App = () => {
  const [plus, setPlus] = useState('')
  const [minus, setMinus] = useState('')

  const count = useSelector(state => state.counter.thepage.value)
  const dispatch = useDispatch()

  const handleincrease = (e)=>{setPlus(e.target.value)}
  const handledecrease = (e)=>{setMinus(e.target.value)}

  const handleincrement = () => {
    if(plus){
      dispatch(incrementk(Number(plus)))
    }
  }
  const handledecrement = () => {
    if(minus){
      dispatch(decrementk(Number(minus)))
    }
  }

  return (
    <div className='flex flex-col bg-blue justify-center'>
      <h1 className='text-center text-3xl mb-11'>Counter Value {count}</h1>
      <div className='flex justify-between p-11'>
        <button onClick={handleincrement}>
          Increase by {plus}
        </button>
        <input type="text"
          placeholder='Enter the value you need to increase'
          value={plus}
          onChange={handleincrease}
        />
      </div>
      <div className='flex justify-between p-11'>
        <button onClick={handledecrement}>
          Decrease by {minus}
        </button>
        <input type="text"
          placeholder='Enter the value you need to decrease'
          value={minus}
          onChange={handledecrease}
        /></div>
    </div>
  )
}

export default App