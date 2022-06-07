import React from "react";
import { TodoContext } from "../TodoCountext";
import './form.css'

const Form =() =>{

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label > Escribe tu nuevo To Do </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aquí tu nueva tarea"
      />
      <div>
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        > Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        > Añadir </button>
      </div>
    </form>
  )
}

export {Form}