import State from "./State.jsx";

import "./App.css";

function App() {
  const counter = 10;
  return (
    <>
      <State />
      <h1>React with Ivan {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button>Add value</button> {" "}
      <button>Decrease value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
