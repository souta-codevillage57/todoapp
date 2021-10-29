import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo, changeIsDone }) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        content={todo.content}
                        key={todo.id}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        isDone={todo.isDone}
                        changeIsDone={changeIsDone}
                    />
                )
            })}

        </ul>
    )
}

export default List