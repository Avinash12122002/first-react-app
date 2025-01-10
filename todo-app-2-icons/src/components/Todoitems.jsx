  import TodoItem from "./TodoItem";
  import styles from "./TodoItems.module.css";

  const Todoitems = ({todoItems,onDeleteClick}) => {
    return (
      <div className={styles.itemsContainer}>
        {todoItems.map((item,index) => (
          <TodoItem key={index} todoName= {item.name} todoDate={item.dueDate} onDeleteClick = {onDeleteClick}></TodoItem>
      ))}
      </div>
    );
  };

  export default Todoitems;