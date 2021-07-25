import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos: Todo[] = [
    { id: "gg", text: "hello world" },
    { id: "234234", text: "this is note 2" },
  ];

  const addTodoHandler = (text: string): void => {};
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
