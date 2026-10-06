export default function Home() {
  const todos = [
    { id: 1, title: "Buy bread", done: true },
    { id: 2, title: "Call mum", done: false },
    { id: 3, title: "Finish homework", done: true },
    { id: 4, title: "Water the plants", done: false },
  ];
  return (
    <div>
        <h1>My to-dos</h1>
        <p>Today is Monday</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.done ? "☑" : "☐"} {todo.title}
          </li>
        ))}
      </ul>
      <p>You have 4 tasks</p>
    </div>
  );
}
