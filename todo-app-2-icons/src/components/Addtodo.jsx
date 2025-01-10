import { useState , useRef } from "react";
import styles from "./TodoItems.module.css";
import { MdPlaylistAddCircle } from "react-icons/md";

function Addtodo({onNewItem}){

const todoNameElement = useRef();
const dueDateElement = useRef();

const handleAddButtonClicked = (event) => {
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const dueDate = dueDateElement.current.value;
  todoNameElement.current.value = '';
  dueDateElement.current.value = '';
  onNewItem(todoName,dueDate);
};

return <div className = "container text-center">
  <form className="row row-cols-3" onSubmit={handleAddButtonClicked}>
    <div className="col">
      <input type="text" className="form-control" placeholder="Enter Todo Here "ref={todoNameElement} />
    </div>
    <div className="col">
      <input type="date" className="form-control" ref={dueDateElement} />
    </div>
    <div className="col">
      <button className={styles.todoAdd} type="submit"><MdPlaylistAddCircle /></button>
    </div>
  </form>
  </div> 


}
export default Addtodo;