import { useState } from "react";

import "./App.css";
import ExpenseRoute from "./routes/ExpenseRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ExpenseRoute />
  )
  
}


export default App;
