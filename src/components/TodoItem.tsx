import React from "react";

import classes from "./TodoItem.module.css";
interface todoItem {
  children: string;
  id: string;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<todoItem> = (props) => {
  return (
    <li className={classes.item} onClick={() => props.onRemove(props.id)}>
      {props.children}
    </li>
  );
};

export default TodoItem;
