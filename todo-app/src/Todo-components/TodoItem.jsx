function TodoItem ({todoName,todoDate}) {
  return (
    <div className = "container">
    <div className="row">
  <div className="col-6">{todoName}</div>
  <div className="col-4 todo-date">{todoDate}</div>
  <div className="col-2">
    <button className="btn btn-danger delete-todo">Delete</button>
  </div>
  </div>
  </div>
  );
};

export default TodoItem;