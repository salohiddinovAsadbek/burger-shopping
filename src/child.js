import { useContext } from "react";
import { DataContext } from "./App";

function Child() {
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
    </div>
  );
}

export default Child;
