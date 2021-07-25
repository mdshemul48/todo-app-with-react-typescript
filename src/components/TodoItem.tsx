import React from "react";

import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ children: string }> = (props) => {
  return <li className={classes.item}>{props.children}</li>;
};

export default TodoItem;
