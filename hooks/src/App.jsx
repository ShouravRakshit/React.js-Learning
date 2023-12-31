import { useState, useRef } from "react";
import Todo from "../Components/Todo";

const handleForm = (event) => {
  event.preventDefault();
  alert("Submitted form!");
};

function App() {
  const [count, setCount] = useState(0);
  const demoRef = useRef();

  const fName = useRef();
  const lName = useRef();

  const increaseNumber = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseNumber = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetNumber = () => {
    setCount(0);
  };
  const changeName = () => {
    const firstName = fName.current.value;
    const lastName = lName.current.value;
    alert(firstName + "" + lastName);
  };

  const Change = () => {
    demoRef.current.innerText = "UseRef";
  };

  const Original = () => {
    demoRef.current.innerText = "Hello World!";
  };

  const changeImage = () => {
    demoRef.current.src = "https://placehold.co/500x300/orange/white";
    demoRef.current.setAttribute("height", "300px");
    demoRef.current.setAttribute("width", "500px");
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name : </label>
        <input placeholder="name" type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1 ref={demoRef}>Hello World!</h1>
        <button
          type="button"
          style={{ padding: "15px", borderRadius: "8px", marginRight: "20px" }}
          onClick={Change}
        >
          Change the Text
        </button>

        <button
          type="button"
          style={{ padding: "15px", borderRadius: "8px" }}
          onClick={Original}
        >
          Go Back To Original
        </button>
      </div>
      <br />
      <div>
        <img
          src="https://placehold.co/500x300?text=Hello+World"
          alt=""
          ref={demoRef}
        />
        <button
          style={{ position: "relative", bottom: "285px" }}
          type="button"
          onClick={changeImage}
        >
          Change Image
        </button>
      </div>
      <div>
        <label htmlFor="fname">First Name : </label>
        <input ref={fName} type="text" name="fname" id="fname" /> <br /> <br />
        <label htmlFor="fname">Last Name : </label>
        <input ref={lName} type="text" name="lname" id="lname" /> <br /> <br />
        <button onClick={changeName} type="button">
          Submit Name
        </button>
      </div>

      <div>
        <h2>You are on number : {count}</h2>
        <button type="button" onClick={increaseNumber}>+</button>
        <button type="button" onClick={resetNumber}>Reset</button>
        <button type="button" onClick={decreaseNumber}>-</button>
      </div>
      <Todo />
    </>
  );
}

export default App;
