import "./App.css";
import Counter from "./Compoents/Counter";
import Form from "./Compoents/Form";
import Function from "./Compoents/Function";
import Login from "./Compoents/Login";
import Map from "./Compoents/Map";
import Prop from "./Compoents/Prop";

const ClickBtn = (e) => {
  e.preventDeafault();
  alert("Hello Motto!!");

}

function App() {

  const ItemObj = {
    name : "Ivan",
    age : 19,
    city : "Calgary"
  }
  return (
    <div>
      <Counter />
      <Form />
      <Map />
      <Login />
      <Prop item={ItemObj}/>
      <Function func = {ClickBtn}/>
    </div>
  );
}

export default App;
