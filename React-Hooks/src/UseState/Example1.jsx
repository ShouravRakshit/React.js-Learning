import { useState } from 'react'

const Example1 = () => {
  const [count, setCount] = useState(20);
  const increaseNumber = () =>{
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)
  }

  const decreaseNumber = () => {
    setCount((prevCount) => prevCount - 1)
  }
  return (
    <div>
      <h2>Hello React Hooks!!!</h2>
      <h1>Count : {count}</h1>
      <button onClick={increaseNumber} style={{margin: "10px"}}>Increment</button>
      <button onClick={decreaseNumber}>Decrement</button>
    </div>
  )
}

export default Example1
