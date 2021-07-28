import { createContext, useState } from "react";
import todo from "../models/todo";
import todoContextInterface from "../models/todoContext";

// creating context
export const todoContext = createContext<todoContextInterface>({
  todos: [],
  addTodo: (task: todo): void => {},
  deleteTodo: (id: string): void => {},
});

// context provider
export const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodoHandler = (task: todo): void => {
    setTodos((prevState: todo[]) => [...prevState, task]);
  };

  const removeTodoHandler = (id: string): void => {
    setTodos((prevState: todo[]) => [
      ...prevState.filter((item: todo) => item.id !== id),
    ]);
  };

  return (
    <todoContext.Provider
      value={{ todos, addTodo: addTodoHandler, deleteTodo: removeTodoHandler }}
    >
      {props.children}
    </todoContext.Provider>
  );
};
