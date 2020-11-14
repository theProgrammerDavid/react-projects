import React from 'react';



interface Todo {
    todos: { id: number; content: string; }[];
    cb: (id: number) => void;

}
 


// const Todos = (todo: Todo, todoDeleteFn: (id: number) => int,) => {
const Todos: React.FC<Todo> = (todo) => {
    const { todos } = todo;

    const todoList = todos.length ? (
        todos.map(((todo) => {
            return (
                <div key={todo.id}>
                    <p> <span onClick={() => {  }}>{todo.content}</span></p>
                </div>
            )
        }))
    ) : (<p>You have no more todos left</p>);

    return (
        <div>
            {todoList}

        </div>

    )
}

export default Todos;