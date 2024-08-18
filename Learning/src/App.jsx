import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  console.log(count);
  
  return (
    <div>
      <h1>React Redux Toolkit</h1>
      <h1>Counter value {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button><br />
      <button onClick={()=>dispatch(decrement())}>Decrement</button><br />
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App