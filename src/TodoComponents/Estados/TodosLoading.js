import React from "react";
import './todosLoading.css'

const TodosLoading =() =>{
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-comleteIcon"></span>
      <p className="LoadingTodo-tex">Cargando Todos</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export {TodosLoading}