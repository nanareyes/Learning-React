import React from "react";
import { TodoContext } from "../TodoCountext";
import './Search.css'

const Search = () =>{
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const onSearchValueChange = (event)=>{
    console.log(event.target.value);
    setSearchValue (event.target.value);
  };
  return(
    <input
      className="Search"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      />
    );
}

export {Search}