// app/page.js
function double(n) {
  return n * 2;
}

export default function Home() {
  return (
    <div>
      <h1>Functions</h1>
      <p>double(5) = {double(5)}</p>
    </div>
  );
}