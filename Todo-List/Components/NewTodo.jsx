import { useState } from "react";
import "../styles/newtodo.css"

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title : "", desc: ""});

    const {title, desc} = todo;

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return {... oldTodo, [name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: "", desc: ""});
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="desc">Description: </label>
        <div style={{position: "relative", left: "90px", bottom: "16px"}}> 
          <textarea id="desc" name="desc" value={desc}  onChange={handleChange}/>
        </div>
      </div>
        <button type="submit">Add ToDo</button>
    </form>
  )
}

export default NewTodo