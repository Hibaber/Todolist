import React, { useState } from "react";
import "../TodoForm/TodoForm.css"
import { v4 as uuidV4 } from "uuid"

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {

        setInput(e.target.value);
        console.log(e.target.value)

    }
    const handleSubmit = e => {

        e.preventDefault();

        const newTodo = {
            id: uuidV4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTodo)
    }

    return (

        <form className="todo-form"
            onSubmit={handleSubmit}>
            <input
                className="todo-input"
                type="text"
                placeholder="Introduce a task :)"
                name="text"
                onChange={handleChange}
            />
            <button className="todo-button">
                add task
            </button>
        </form>
    )

}

export default TodoForm;