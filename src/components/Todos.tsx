import React from "react";
import todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id}>{item.text}</TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
