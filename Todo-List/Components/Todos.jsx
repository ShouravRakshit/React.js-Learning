import Todo from './Todo';
import "../styles/todos.css"

const Todos = (props) => {
    const {todos} = props;
    
  return (
   
    <div className='todos'>
        {todos.map((todo, index) => {
            return (
                <Todo key={index} todo={todo}/>
            )
        })}
    </div>
   
  )
}

export default Todos