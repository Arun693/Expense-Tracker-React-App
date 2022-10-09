import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";
import Card from "../UI/Card";

function Expense(props) {
  const [dropDownValue, setDropdownValue] = useState("2020");
  const handleYearChangeEvent = (value) => {
    setDropdownValue(value);
  };
  const yearlyExpense = props.data.filter(
    (expense) => expense.date.getFullYear() === Number(dropDownValue)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          handleYearChange={handleYearChangeEvent}
          yearSelected={dropDownValue}
        ></ExpensesFilter>
        <ExpenseChart expense={yearlyExpense}/>
        <ExpenseList items={yearlyExpense}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expense;
