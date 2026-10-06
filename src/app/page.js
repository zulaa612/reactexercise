"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aida");

  return (  
    <div>
      <h1>{count}</h1>
      <button onClick={() => {console.log(
        "hello"
      )}}>hello</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>

      <p>Hello, {name}</p>
      <button onClick={() => setName("Bekzat")}>change name</button>
    </div>
  );
}