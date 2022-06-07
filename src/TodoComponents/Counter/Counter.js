import React from "react";
import { TodoContext } from "../TodoCountext";
import './Counter.css';

const Counter = () =>{
  //const {total, completed}= props;
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return(
    <h2 className="Counter"> Has completado {completedTodos} de {totalTodos} ToDos</h2>
  )
}

export {Counter}