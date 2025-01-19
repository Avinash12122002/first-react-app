import Addtodo from "./components/Addtodo"
import AppName from "./components/AppName"
import Todoitems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";



function App() {
return (
  <TodoItemsContextProvider>
  <center
  className = "todo-container">
  <AppName/> 
  <Addtodo/>
  <WelcomeMessage></WelcomeMessage>
  <Todoitems></Todoitems>
  </center>
  </TodoItemsContextProvider>
  );
}

export default App;
