import React from "react";

const NewTodo: React.FC = (props) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
