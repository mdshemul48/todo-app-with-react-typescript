import React from "react";

import classes from "./TodoItem.module.css";
interface todoItem {
  children: string;
  id: string;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<todoItem> = ({ id, onRemove, children }) => {
  return (
    <li className={classes.item} onClick={() => onRemove(id)}>
      {children}
    </li>
  );
};

export default TodoItem;
