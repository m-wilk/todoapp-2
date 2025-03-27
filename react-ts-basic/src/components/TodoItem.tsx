import { ReactNode } from "react";

interface TodoProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

export default function TodoItem({ title, children, id, onDelete }: TodoProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}
