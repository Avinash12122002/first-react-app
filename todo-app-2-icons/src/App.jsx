import Addtodo from "./components/Addtodo"
import AppName from "./components/AppName"
import Todoitems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

import { useState } from "react";

function App() {
  const initialTodoItems = [];

const [todoItems, setTodoItems] = useState(initialTodoItems);

const handleNewItem = (itemName , itemDueDate) => {

  setTodoItems((currValue)=>{
    return [...currValue, {name : itemName, dueDate : itemDueDate}];
  });
  console.log(`new item added: ${itemName} Date: ${itemDueDate}`);

};

const handleDeleteClick = (todoItemName) => {
  const newTodoItems = todoItems.filter((item) => 
  item.name !==todoItemName);
  setTodoItems(newTodoItems);
  console.log(`item deleted ${todoItemName}`);
}


return (
<center
 className = "todo-container">
    <AppName/> 
    <Addtodo onNewItem = {handleNewItem} />
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <Todoitems todoItems = {todoItems} onDeleteClick = {handleDeleteClick}></Todoitems>
  </center>
  );
}

export default App;
