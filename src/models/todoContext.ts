import todo from "./todo";

export default interface todoContextInterface {
  todos: todo[];
  addTodo: (task: todo) => void;
  deleteTodo: (id: string) => void;
}
