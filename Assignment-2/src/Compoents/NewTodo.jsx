import { useState } from "react"

const NewTodo = (props) => {

  const [todo, setTodo] = useState("");
  const handleInputChange = (e) =>{
    setTodo(e.target.value);

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.onTodo(todo)
  }
  return (
    
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo">I am New Todo: </label>
        <input type="text" name="todo" id="todo" value={todo} onChange={handleInputChange}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo