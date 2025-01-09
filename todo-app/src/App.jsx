import Addtodo from "./Todo-components/Addtodo"
import AppName from "./Todo-components/AppName"
import Todoitems from "./Todo-components/Todoitems";
import "./App.css";

function App() {
  const todoItems = [{
    name : "Buy Milk",
    dueDate : "4/10/2023"
  },
  {
    name : "Buy Chicken",
    dueDate : "4/10/2023"
  },
  {
    name : "Buy Eggs",
    dueDate  : "4/10/2023"
  },
];
return (
<center
 className = "todo-container">
    <AppName/>
    <Addtodo/>
    <Todoitems todoItems = {todoItems}></Todoitems>
  </center>
  );
}

export default App
