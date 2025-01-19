import { MdDeleteForever } from "react-icons/md";
import {TodoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem ({todoName,todoDate}) {
   const {deleteItem} = useContext(TodoItemsContext)
  return (
    <div className = "container">
    <div className="row row-cols-3">
    <div className="col">{todoName}</div>
    <div className="col">{todoDate}</div>
    <div className="col">
    <button className="btn btn-danger delete-todo" onClick = { () => deleteItem(todoName)}><MdDeleteForever /></button>
  </div>
  </div>
  </div>
  );
};

export default TodoItem;