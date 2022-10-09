import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, onExpenseModification] = useState(INITIAL_EXPENSES);
  const onAddExpense = newExpense => {
    console.log(newExpense);
    onExpenseModification(prevState => {
      return [...prevState, newExpense]
    });
  }
  return (
    <div>
      <NewExpense onSaveExpense={onAddExpense}/>
      <Expense data={expenses}></Expense>
    </div>
  );
}

export default App;
