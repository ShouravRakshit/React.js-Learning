import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="center-counter">
      <h1>Counter App</h1>
      <div style={{textAlign: "center", margin:"10px", color: "green"}}>
        <h2>Count : {count}</h2>
        <button style={{color: "gold", margin: "10px", fontSize:"18px", padding:"10px", borderRadius:"5px"}} disabled={count >= 5 ? true: false } onClick={increase}>+</button>
        <button style={{color: "gold", margin: "10px", fontSize:"18px", padding:"10px", borderRadius:"5px"}} disabled={count <= -5 ? true: false } onClick={decrease}>-</button>
        <button style={{color: "gold", margin: "10px", fontSize:"18px", padding:"10px", borderRadius:"5px"}} onClick={reset}>0</button>
      </div>
    </div>
  );
};

export default Counter;
