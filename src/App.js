import "./style.css";
import { createContext, useState } from "react";
import Child from "./child";
import { Routes, Route } from "react-dom";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState("red");

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      <Child />
      <h1 style={{ backgroundColor: data }}>Hello</h1>
    </DataContext.Provider>
  );
}

export default App;
