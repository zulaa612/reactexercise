
"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+1</button>
    </div>
  );
}