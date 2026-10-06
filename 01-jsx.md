# Exercise 1 — JSX: what you can write inside `return`

**File you edit:** `app/page.js`
**Time:** ~20 min

## New words

| Word | Simple meaning |
| --- | --- |
| **component** | A function that returns what you see on the screen |
| **JSX** | The HTML-looking code inside `return ( ... )` |
| **render** | React reading your component and drawing the result |

## Goal

A React page is a function. It **returns** something, and that something appears on the
screen. The rules of what you may write in there are what this exercise is about.

Type the code by hand. Copy-paste teaches nothing.

## Step 1 — The smallest page

Open `app/page.js`. Delete everything in it. Type this:

```jsx
export default function Home() {
  return <h1>Hello React</h1>;
}
```

Save. Look at <http://localhost:3000>.

**Result:** one big heading: **Hello React**

That is a component: a function whose name starts with a capital letter, returning JSX.

## Step 2 — A component returns ONE thing

Try to return two things:

```jsx
export default function Home() {
  return (
    <h1>Hello React</h1>
    <p>I am learning JSX</p>
  );
}
```

**Result:** the page breaks. You see an error:

```
Adjacent JSX elements must be wrapped in an enclosing tag
```

**Why:** a function can only return **one** value. Two tags next to each other are two
values.

Fix it by putting them in a box:

```jsx
export default function Home() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>I am learning JSX</p>
    </div>
  );
}
```

**Result:** heading and paragraph both appear, the error is gone.

> Do not want an extra `<div>` in your page? Use an empty tag `<>` … `</>` instead. It is
> called a **Fragment**. It groups things but leaves nothing behind in the HTML.

## Step 3 — Curly braces mean "JavaScript here"

Inside JSX, `{ }` says: *stop writing HTML, start writing JavaScript*.

```jsx
export default function Home() {
  const name = "Aida";
  const taskCount = 3;

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>You have {taskCount} tasks</p>
      <p>Tomorrow you will have {taskCount + 1}</p>
      <p>Your name has {name.length} letters</p>
    </div>
  );
}
```

**Result:**

```
Hello Aida
You have 3 tasks
Tomorrow you will have 4
Your name has 4 letters
```

`{taskCount + 1}` was calculated by JavaScript. JSX only printed the answer.

Careful:

- `{name}` → prints `Aida`
- `"{name}"` → prints the letters `{name}`, because quotes make it plain text

## Step 4 — Two attributes that are not like HTML

```jsx
export default function Home() {
  const isDone = true;

  return (
    <div>
      <h1 className="title">Task</h1>
      <p style={{ color: isDone ? "green" : "red" }}>Buy bread</p>
    </div>
  );
}
```

**Result:** the heading **Task**, and below it **Buy bread** written in green.

Two rules:

1. `class` is written **`className`**. `class` is a reserved word in JavaScript, so React
   uses another name.
2. `style` takes an **object**, not text. That is why there are two brackets:
   the outer `{ }` means "JavaScript starts here", the inner `{ }` is the object itself.
   Values are text: `"green"`, `"20px"`.

## Step 5 — Choosing between two things

There is **no `if`** inside JSX. Instead you use `? :`, called a ternary:

```
condition ? valueIfTrue : valueIfFalse
```

```jsx
const isDone = true;

<p>{isDone ? "Finished" : "Still to do"}</p>
```

**Result:** the word **Finished**.

Change `isDone` to `false`, save.
**Result:** it becomes **Still to do**.

You can use it inside attributes too, like the colour in Step 4.

## Step 6 — Showing a list

Your to-do app will need this every day.

```jsx
export default function Home() {
  const tasks = ["Buy bread", "Call mum", "Finish homework"];

  return (
    <div>
      <h1>My tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Result:**

```
My tasks

• Buy bread
• Call mum
• Finish homework
```

What happened: `.map()` walks through the array and turns every string into an `<li>`.
Three strings in → three list items out.

`key` is required. React uses it to tell items apart when the list changes later. Delete
the `key` and look at the browser console — there is a warning. Put it back.

## Step 7 — A list of objects

Real to-dos are not just text. They have a title and a state:

```jsx
export default function Home() {
  const todos = [
    { id: 1, title: "Buy bread", done: false },
    { id: 2, title: "Call mum", done: true },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.done ? "☑" : "☐"} {todo.title}
        </li>
      ))}
    </ul>
  );
}
```

**Result:**

```
☐ Buy bread
☑ Call mum
```

Use `todo.id` as the key when the item has an id.

## Your task

Rewrite `app/page.js` to show a small to-do screen. Use only what is on this page.

1. At the top of the component, make an array `todos` with **four** objects. Each has
   `id`, `title` and `done` (two of them done, two not).
2. A `<h1>` saying `My to-dos`.
3. A paragraph saying `Today is Monday` — where `Monday` comes from a variable.
4. A `<ul>` with one `<li>` per todo, showing `☑` or `☐` and the title.
5. Finished tasks must be grey, unfinished ones black. (`style` + ternary.)
6. Under the list, a paragraph saying `You have 4 tasks`, where `4` comes from
   `todos.length` — not typed by hand.

## Result you should see

```
My to-dos

Today is Monday

☑ Buy bread          (grey)
☐ Call mum           (black)
☑ Finish homework    (grey)
☐ Water the plants   (black)

You have 4 tasks
```

Now delete one object from the array and save.
**Result:** the list has 3 rows and the last line says `You have 3 tasks` — by itself.
If you had to change the number by hand, go back to point 6.

## If it breaks

| What you see | What it means |
| --- | --- |
| `Adjacent JSX elements must be wrapped in an enclosing tag` | You returned two tags. Wrap them in `<div>` or `<>`. |
| `name is not defined` | You used `{name}` but never created that variable. |
| The page shows `{name}` as letters | You put it in quotes: `"{name}"`. Remove the quotes. |
| `Each child in a list should have a unique "key" prop` | Missing `key` inside `.map()`. |
| `Objects are not valid as a React child` | You printed the whole object. Print `todo.title`. |
| Nothing appears and the terminal shows a red error | Read the file and line number in the terminal. It is usually a missing `}` or `)`. |

## Check yourself

- Why can a component return only one element?
- What is the difference between `{5 + 5}` and `"5 + 5"` in JSX?
- Why `className` and not `class`?
- Where does `if` go, if it cannot go inside JSX?
