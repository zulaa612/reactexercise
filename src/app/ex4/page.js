import { format, addDays, differenceInCalendarDays } from "date-fns";

export default function Home() {
  const today = new Date();
  const exam = new Date(2026, 11, 15); // careful: 11 means December

  return (
    <div>
      <h1>Dates</h1>
      <p>Today: {format(today, "dd MMMM yyyy")}</p>
      <p>In 10 days: {format(addDays(today, 10), "dd MMMM yyyy")}</p>
      <p>Days until the exam: {differenceInCalendarDays(exam, today)}</p>
    </div>
  );
}