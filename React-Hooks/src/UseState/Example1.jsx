import React, { useState } from 'react'

const Example1 = () => {
  const [count, setCount] = useState(20);
  const handleNumber = () =>{
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)

  }
  return (
    <div>
      <h2>Hello React Hooks!!!</h2>
      <h1>Count : {count}</h1>
      <button onClick={handleNumber}>Increment</button>
    </div>
  )
}

export default Example1
