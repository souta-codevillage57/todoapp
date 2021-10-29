import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value === '') {
            alert('入力してください！')
        } else {

            addTodo(value);
            setValue('')



        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form