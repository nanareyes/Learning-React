import React from "react";
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

const TodoItem = (props) =>{

  // const onCompleted =()=>{
  //   alert('Ya completaste el To Do' + props.text)
  // }
  // const onDelete =()=>{
  //   alert('Borraste el To Do' + props.text)
  // }

  return(
    <li className="TodoItem">
      <CompleteIcon
        completed = {props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
        />
    </li>
  )
}

export {TodoItem}