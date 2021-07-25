class Todo {
  id: string;
  text: string;
  constructor(TodoText: string) {
    this.text = TodoText;
    this.id = Date().toString();
  }
}
export default Todo;
