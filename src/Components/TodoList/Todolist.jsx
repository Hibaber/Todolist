import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo.jsx"
import "../TodoList/TodoList.css"

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const addTodo = todo => {

        if (todo.text.trim()) {                                    
            todo.text = todo.text.trim()                           
            const updatedTodos = [todo, ...todos];                 
            setTodos(updatedTodos);                                
        }
    };

    const deleteTodo = id => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    };

    const completeTodo = id => {
        const completedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed                
            }
            return todo;
        })
        setTodos(completedTodos)
    };

    return (
        <>
            <TodoForm onSubmit={addTodo} />
            <div className="todo-list-container">
                {
                    todos.map((todo) =>
                        <Todo
                            key={todo.id}
                            id={todo.id}                          
                            text={todo.text}
                            completed={todo.completed}
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TodoList;