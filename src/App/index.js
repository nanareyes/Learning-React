import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoComponents/TodoCountext/index'

// const todosEje = [
//   {
//     text: "Cortar cebolla",
//     completed: false,
//   },
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
