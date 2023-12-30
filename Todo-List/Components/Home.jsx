import Todos from "./Todos";
import "../styles/home.css"
import NewTodo from "./NewTodo";
import { useState } from "react";



const Home = () => {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    console.log(todo)
    setTodos((prevTodos) => {
      return [...prevTodos, {todo}]
    })
  };

  return (
    <div className="container">
      <h1 style={{color: "white", paddingBottom: "25px", paddingLeft: "50px"}}>Todo App</h1>
      <NewTodo onAddTodo ={handleAddTodo}/>
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
