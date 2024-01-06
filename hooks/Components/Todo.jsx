import { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const captureItem = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <>
      <h1>Todo</h1>
      <table>
        {list.length !== 0 ? (
          list.map((ele, index) => {
            return (
              <tr key={index}>
                <td style={{ fontSize: "25px" }}> {ele} </td>
                <button
                  onClick={() => {
                    removeItem(index);
                  }}
                  style={{
                    borderRadius: "10px",
                    padding: "10px 15px",
                    backgroundColor: "#B80000",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </tr>
            );
          })
        ) : (
          <tr>{"Nothing to show for now !!!"}</tr>
        )}
      </table>
      <input
        onChange={captureItem}
        placeholder="todo"
        type="text"
        name=""
        id=""
      />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </>
  );
};

export default Todo;
