import React from 'react'
import SingleTodo from './singleTodo';
import "./app.css";
import { Droppable } from 'react-beautiful-dnd';

function TodoFullCard({ name = "", type = "", todos = {}, addTodo = () => { }, setTodos = () => { }, allTodos = {} }) {
    const [isNewTodo, setisNewTodo] = React.useState(false);
    const [todoValue, setTodoValue] = React.useState("");
    return (
        <Droppable droppableId={type}>
            {(provided, snapshot) => (
                <div className='todos'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <div className='todosHeader'>
                        <div><h5>{name}</h5></div>
                        <div><h5>{todos.length ?? 0}</h5></div>
                    </div>
                    <div className='addTodo' onClick={() => {
                        setisNewTodo(true);
                    }}>+</div>
                    {isNewTodo && (
                        <>
                            <div className='textAreaDiv'>
                                <textarea className='textarea' rows={4} placeholder="Description"
                                    onChange={(e) => setTodoValue(e.target.value)}
                                    value={todoValue}
                                />
                            </div>
                            <div>
                                <button
                                    className='saveBtn'
                                    onClick={() => {
                                        if (todoValue)
                                            addTodo(type, todoValue);
                                        setisNewTodo(false);
                                        setTodoValue("");
                                    }}>
                                    Save
                                </button>
                            </div>
                        </>
                    )}
                    {(todos || []).map(({ value = "", key }, index) => (<SingleTodo value={value} index={index} id={key} key={key} type={type} setTodos={setTodos} allTodos={allTodos} />))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default TodoFullCard