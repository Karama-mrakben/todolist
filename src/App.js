import "./App.css";
import AddTask from "./component/AddTask/AddTask";
import ListTasks from "./component/ListTasks/ListTasks";

function App() {
  return (
    <div className="App">
      <h2>To Do List</h2>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;