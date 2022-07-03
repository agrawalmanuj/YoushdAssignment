import React from 'react'
import "./app.css";
import TodoFullCard from './todoFullCard';

const todosType = [
    { name: "To do", type: "todo" },
    { name: "In Progress", type: "inProgress" },
    { name: "Completed", type: "completed" }
];

function TodoList({
    todos = {},
    addTodo = () => { },
    setTodos = () => { }
}) {
    return (
        <div className='varicalPane'>
            <div className='todoMainContainer'>
                {todosType.map(({ name, type }) => {
                    return (

                        <TodoFullCard
                            name={name}
                            type={type}
                            todos={todos[type]}
                            addTodo={addTodo}
                            key={type}
                            setTodos={setTodos}
                            allTodos={todos}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList