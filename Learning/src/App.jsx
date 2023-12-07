import Data from "./Data.json";
import Card from "./Components/Card.jsx";
import List from "./Components/List.jsx";
import Example from "./Components/Example.jsx";
import Example2 from "./Components/Example2.jsx";

function App() {
  // const items = [];

  // for (let index = 0; index < Data.length; index++) {
  //   items.push( <Card textTitle = {Data[index].textTitle} age={Data[index].age}/>)
  // }


  return (
    <>
      <h1 style={{ color: "red", fontSize: "3rem" }}>Hello World!</h1>
      <h1 className="style">Hello World!</h1>
      {/* <Card textTitle = "Software Developer" age={20}/>
      <Card textTitle = "FullStack Developer" age={21}/> 
      <Card textTitle = "BackEnd Developer" age={22}/> */}
      {Data.map((item, index) => <Card key={index} textTitle = {item.textTitle} age={item.age}/>)};
      <List />
      <Example/>
      <Example2 />
    </>
  );
}

export default App;
