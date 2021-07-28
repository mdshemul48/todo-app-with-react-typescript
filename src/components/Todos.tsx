import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const { todos, deleteTodo } = useContext(todoContext);
  return (
    <ul className={classes.todos}>
      {todos.map((item) => (
        <TodoItem key={item.id} id={item.id} onRemove={deleteTodo}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
