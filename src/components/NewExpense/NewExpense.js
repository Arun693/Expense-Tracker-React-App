import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isCreateMode, updateCreateMode] = useState(false);
  const newExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onSaveExpense(newExpense);
  };

  const onCreateExpense = () => {
    updateCreateMode((prevState) => {
      return !prevState;
    });
  };

  const handleCancelCreate = () => {
    updateCreateMode(false);
  }
  return (
    <div>
      {isCreateMode && (
        <div className="new-expense">
          <ExpenseForm onSaveExpense={newExpenseHandler} onCancelExpense={handleCancelCreate}></ExpenseForm>{" "}
        </div>
      )}
      {!isCreateMode && (
        <div className="new-expense">
          <button type="button" onClick={onCreateExpense}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
