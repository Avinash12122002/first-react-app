import { MdDeleteForever } from "react-icons/md";
function TodoItem ({todoName,todoDate,onDeleteClick}) {
  return (
    <div className = "container">
    <div className="row row-cols-3">
  <div className="col">{todoName}</div>
  <div className="col">{todoDate}</div>
  <div className="col">
    <button className="btn btn-danger delete-todo" onClick = { () => onDeleteClick(todoName)}><MdDeleteForever /></button>
  </div>
  </div>
  </div>
  );
};

export default TodoItem;