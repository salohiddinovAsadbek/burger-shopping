import { useContext } from "react";
import { DataContext } from "./App";

function Child({ title }) {
  const { updateData, data } = useContext(DataContext);

  const send = () => {
    if (data === "red") {
      updateData("black");
    } else {
      updateData("red");
    }
  };

  return (
    <div>
      <button onClick={send}> Click</button>
      <h1>{title}</h1>
    </div>
  );
}

export default Child;
