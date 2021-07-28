import React, { useState, useContext } from "react";
import { todoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const { addTodo } = useContext(todoContext);
  const [text, setText] = useState("");

  const textChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      // throw error
      return;
    }

    addTodo({ text, id: Math.random().toString() });
    setText("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input onChange={textChangeHandler} value={text} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
