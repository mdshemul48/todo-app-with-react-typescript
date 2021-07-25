import Todos from "./components/Todos";
import todo from "./models/todo";

function App() {
  const todos: todo[] = [{ id: "gg", text: "hello world" }];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
