import { createContext } from "react";
import {useReducer } from "react";

const todoItemsReducer = (currTodoItem,action) => {
  let newTodoItem = currTodoItem;
  if(action.type === "NEW_ITEM"){
    newTodoItem = [...currTodoItem,{
      name: action.payload.itemName, 
      dueDate: action.payload.itemDueDate}];
  }
  else if (action.type === "DELETE_ITEM"){
    newTodoItem = currTodoItem.filter(item => item.name !== action.payload.itemName);
  }   
  return newTodoItem;
};

export const TodoItemsContext = createContext([]);

const TodoItemsContextProvider = ({ children }) => {
  
const [todoItems,dispatchTodoItem] = useReducer(todoItemsReducer,[]);

const addNewItem = (itemName , itemDueDate) => {
  const newItemAction = {
    type: "NEW_ITEM",
    payload: {itemName , itemDueDate},
  };
  dispatchTodoItem(newItemAction);
};

const deleteItem = (todoItemName) => {
  const deleteItemAction = {
    type: "DELETE_ITEM",
    payload: {itemName: todoItemName}
  };
    dispatchTodoItem(deleteItemAction);

};

return(
  <TodoItemsContext.Provider 
  value={{todoItems,addNewItem,deleteItem}}>{children}</TodoItemsContext.Provider>
)
}

export default  TodoItemsContextProvider;