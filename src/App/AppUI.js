import React from "react";
import "./App.css";
import { Counter } from "../TodoComponents/Counter/Counter";
import { CreateButton } from "../TodoComponents/CreateButon/CreateButton";
import { List } from "../TodoComponents/List/List";
import { Search } from "../TodoComponents/Search/Search";
import { TodoItem } from "../TodoComponents/TodoItem/TodoItem";
import { TodoContext } from "../TodoComponents/TodoCountext";
import { Modal } from '../TodoComponents/Modal/Modal'
import { Form } from "../TodoComponents/Form/Form";
import { TodosError} from '../TodoComponents/Estados/TodosError';
import { EmptyTodos} from '../TodoComponents/Estados/EmptyTodos';
import { TodosLoading} from '../TodoComponents/Estados/TodosLoading';

function AppUI() {
  const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Counter />
      <Search />
      <List>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {!loading && !searchedTodo.length && <EmptyTodos/>}
        {searchedTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </List>
      {!!openModal&&(<Modal><Form/></Modal>)}
      <CreateButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
