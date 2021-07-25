import React from "react";
import todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
interface todos {
  items: todo[];
  onRemove: (id: string) => void;
}

const Todos: React.FC<todos> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} id={item.id} onRemove={props.onRemove}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
