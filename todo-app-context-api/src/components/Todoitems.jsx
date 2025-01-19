import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import {TodoItemsContext} from "../store/todo-items-store";

const Todoitems = () => {
  // const contextObj =  useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item,index) => (
        <TodoItem key={index} 
        todoName= {item.name} 
        todoDate={item.dueDate}>
        </TodoItem>
    ))}
    </div>
  );
};

  export default Todoitems;