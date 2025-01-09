  import TodoItem from "./TodoItem";

  const Todoitems = ({todoItems}) => {
    return (
      <div className="items-container">
        {todoItems.map((item,index) => (
          <TodoItem key={index} todoName= {item.name} todoDate={item.dueDate}></TodoItem>
      ))};
      </div>
    );
  };

  export default Todoitems;