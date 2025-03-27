import { type FormEvent, useRef } from "react";

type NewTodoProps = {
  onAddTodo: (title: string, sumamary: string) => void;
};

export default function NewTodo({ onAddTodo }: NewTodoProps) {
  const title = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
    
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredTitle = title?.current?.value;
    const enteredSummary = summary?.current?.value;
    if (enteredTitle && enteredSummary) {
        onAddTodo(enteredTitle, enteredSummary);
    }
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your Todo</label>
        <input id="title" type="text" ref={title} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Todo</button>
      </p>
    </form>
  );
}
