import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id);
    }


    return (
        <div class="spacer">

            <label >
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                <span class="white-text">{todo.name}</span>
            </label>
        </div>
    )
}
