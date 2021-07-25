import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos: Todo[] = [
    { id: "gg", text: "hello world" },
    { id: "234234", text: "this is note 2" },
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
