
import './App.css';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/Todolist';

function App() {
  return (
    <div className="todolistApp">
      <div className="mainTodolist">

        <h1>🌸🌸 My todo list 🌸🌸</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
