import styles from "./WelcomeMessage.module.css"
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  // const contextObj =  useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const {todoItems} = useContext(TodoItemsContext);

  return (
  todoItems.length ===0 && 
  <p className = {styles.welcome}>Welcome to my website
  </p>
  );
};

export default WelcomeMessage;