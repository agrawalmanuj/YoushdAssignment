import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState({ todo: [], inProgress: [], completed: [] });

    const addTodo = (type, value) => {
        const copyTodos = { ...todos };
        const todosTypeValue = todos[type];
        todosTypeValue.push({
            key: `${Date.now()}`,
            value: value,
            isDone: true,
        })
        copyTodos[type] = todosTypeValue;
        setTodos(copyTodos);
    }


    const onDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        let add;
        let active = JSON.parse(JSON.stringify(todos));
        // Source Logic
        add = active[source.droppableId][source.index];
        active[source.droppableId].splice(source.index, 1);
        // Destination Logic
        active[destination.droppableId].splice(destination.index, 0, add);
        setTodos(active);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <TodoList
                todos={todos}
                addTodo={addTodo}
                setTodos={setTodos}
            />
        </DragDropContext>
    )
}


export default App;