import NewTodo from "./NewTodo";
import Todos from "./Todos";

const Home = () => {
  const todos = ["todo1", "todo2"];
  return (
    <div>
      <NewTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
