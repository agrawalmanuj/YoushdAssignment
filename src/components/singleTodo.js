import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import "./app.css";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "500px"
    },
};


function SingleTodo({ value, index = "", id = "", type = "", setTodos = () => { }, allTodos = {} }) {
    const [isModal, setIsModal] = React.useState(false);
    const [modalValue, setModalValue] = React.useState(value);

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <>
                    <div className='singleTodoCard'
                        onClick={() => { setIsModal(true) }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >{value}</div>

                    <Modal
                        isOpen={isModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        onRequestClose={() => { setIsModal(false) }}
                        style={customStyles}
                    >
                        <textarea
                            className='textareaEdit' rows={4}
                            onChange={(e) => {
                                setModalValue(e.target.value)
                            }}
                            value={modalValue}
                        />
                        <div className='editSaveDiv'>
                            <button className='editSaveBtn'
                                onClick={() => {
                                    const copyAllTodos = { ...allTodos };
                                    copyAllTodos[type][index].value = modalValue;
                                    setTodos(copyAllTodos);
                                    setIsModal(false);
                                }}
                            >Save</button>
                        </div>

                    </Modal>
                </>
            )}
        </Draggable>
    )
}

export default SingleTodo