import React from "react";
import todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id}>{item.text}</TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
