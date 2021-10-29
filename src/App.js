import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import { nanoid } from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState([


    { content: '課題をする', id: nanoid() },
    { content: '料理をする', id: nanoid() },
    { content: '洗濯をする', id: nanoid() }

  ])

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content,
        id: nanoid(),
        isDone: false
      }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const changeIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone }
        } else {
          return todo
        }
      })
    )
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} changeIsDone={changeIsDone} />
    </div>
  )
}

export default App