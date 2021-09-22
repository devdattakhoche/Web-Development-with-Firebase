import './App.css';
import AddTodo from "./components/addTodo";
import { React } from "react";
import DisplayTodo from './components/displayTodo';


function App() {
  return (
    <div className="App">
      <AddTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
