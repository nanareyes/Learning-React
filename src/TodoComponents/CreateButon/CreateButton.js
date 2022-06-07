import React from "react";
import './Button.css'


const CreateButton = (props) =>{

  const onClickButton=()=>{
   props.setOpenModal(prevState => !prevState)
  }
  return(
    <button
      className="Button"
      onClick={onClickButton}
    >
    Add
    </button>
  )
}

export {CreateButton}