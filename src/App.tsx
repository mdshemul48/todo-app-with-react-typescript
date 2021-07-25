import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string): void => {
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text },
    ]);
  };

  const removeTodoHandler = (id: string): void => {
    setTodos((prevState) => [...prevState.filter((item) => item.id !== id)]);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
}

export default App;
