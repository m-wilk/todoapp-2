import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

export type Todo = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  function handleAddTodo(title: string, sumamary: string) {    
    const newTodo: Todo = {
      title: title,
      description: sumamary,
      id: Math.random(),
    };
    setTodo([...todos, newTodo])
    
  }

  function handleDeleteTodo(id: number) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main>
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList onDeleteTodo={handleDeleteTodo} todos={todos} />
    </main>
  );
}

export default App;
