import TodoItem from "./TodoItem";
import { type Todo  } from "../App";

type TodoProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
};

export default function TodoList({ todos, onDeleteTodo }: TodoProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem id={todo.id} title={todo.title} onDelete={onDeleteTodo}>
            <p>{todo.description}</p>
          </TodoItem>
        </li>
      ))}
    </ul>
  );
}
