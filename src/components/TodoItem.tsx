import React from "react";

const TodoItem: React.FC<{ children: string }> = (props) => {
  return <li>{props.children}</li>;
};

export default TodoItem;
