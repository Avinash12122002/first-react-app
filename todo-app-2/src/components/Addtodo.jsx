import { useState } from "react";
import styles from "./TodoItems.module.css";

function Addtodo({onNewItem}){

const [todoName,setTodoName] = useState("");
const [dueDate,setDueDate] = useState("");

const handleNameChange = (event) =>{
  setTodoName(event.target.value);
}

const handleDueDateChange = (event) =>{
  setDueDate(event.target.value);
}

const handleAddButtonClicked = () => {
  onNewItem(todoName,dueDate);
  setTodoName("");
  setDueDate("");
}

return <div className = "container text-center">
  <div className="row row-cols-3">
    <div className="col">
      <input type="text" className="form-control" placeholder="Enter Todo Here " value={todoName} onChange={handleNameChange} />
    </div>
    <div className="col">
      <input type="date" className="form-control" value={dueDate} onChange={handleDueDateChange} />
    </div>
    <div className="col">
      <button className={styles.todoAdd} onClick={handleAddButtonClicked}>Add Todo</button>
    </div>
  </div>
  </div> 


}
export default Addtodo;