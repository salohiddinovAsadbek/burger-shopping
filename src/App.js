import "./style.css";
import { createContext, useState } from "react";
// import Child from "./child";
import Header from "./components/header";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState("red");

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      <Header />
    </DataContext.Provider>
  );
}

export default App;
