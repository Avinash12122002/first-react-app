import Addtodo from "./Todo-components/Addtodo"
import AppName from "./Todo-components/AppName"
import Todoitems from "./Todo-components/Todoitems"
import "./App.css";

function App() {
return<center
 className = "todo-container">
    <AppName/>
    <Addtodo/>
    <Todoitems/>
  </center>
}

export default App
