import React from "react";
import "../Todo/Todo.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

const Todo = ({ id, text, completed, completeTodo, deleteTodo }) => {
    return (
        <div className={completed ? "todo-container completed" : "todo-container"}>
            <div
                className="todo-text"
                onClick={() => completeTodo(id)}>
                {text}
            </div>
            <div
                className="todo-container-icons"
                onClick={() => deleteTodo(id)}>
                <AiOutlineCloseCircle className="todo-icon" />
            </div>
        </div>
    )
}

export default Todo;