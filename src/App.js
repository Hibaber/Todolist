
import './App.css';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/Todolist';

function App() {
  return (
    <div className="todolistApp">
      <div className="mainTodolist">
        <div class="d-flex flex-column justify-content-center w-100 h-100">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-light text-white m-0">🌸🌸 My todo list 🌸🌸</h1>
            <TodoList />

          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
