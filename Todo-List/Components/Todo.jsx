import { MdDelete } from "react-icons/md";
import "../styles/todo.css";

const Todo = (props) => {
  const { title, description } = props.todo;

  return (
    <>
      <div className="todo">
        <div style={{color: "whitesmoke", fontWeight: "700"}}>
          <h2 >{title}</h2>
          <p className="todo p">{description}</p>
        </div>
        <div>
          <button className="btn" style={{ fontSize: "25px" }}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
