import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo.jsx"
import "../TodoList/TodoList.css"

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {


        if (todo.text.trim()) {                                     //verificamos si no está vacía
            todo.text = todo.text.trim()                            // le quitamos los espacios
            const updatedTodos = [todo, ...todos];                  // poner la tarea nueva al principio y después el resto
            setTodos(updatedTodos);                                 // actualizamos el estado de las tareas con el nuevo
        }
    };

    const deleteTodo = id => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    };

    const completeTodo = id => {
        const completedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed                 // si coincide el Di invierte el estado
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
                            id={todo.id}                          //importante incluir el id por 2ª vez porque es una prop, a diferencia del key que no lo es!!
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