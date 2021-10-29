import React from 'react'


const Item = ({ content, id, deleteTodo, isDone, changeIsDone }) => {


    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <input type='checkbox' onChange={() => {
                changeIsDone(id)
            }} />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
            <button onClick={handleDelete}>消去</button>
        </li>
    )
}

export default Item