import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setTitleHandler] = useState("");
  const [expenseDate, setDateHandler] = useState("");
  const [expenseAmount, setAmountHandler] = useState("");


  const titleClickHandler = (event) => {
    setTitleHandler(event.target.value);
  };
  const dateHandler = (event) => {
    setDateHandler(event.target.value);
  }
  const amountHandler = (event) => {
     setAmountHandler(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const submittedData = {
        title : expenseTitle,
        amount: +expenseAmount,
        date: new Date(expenseDate)
    }
    props.onSaveExpense(submittedData);
    onCancelCreate();
  }

  const onCancelCreate = () => {
    __clearFormInput();
    props.onCancelExpense();
  }

  const __clearFormInput = () => {
    setTitleHandler('');
    setDateHandler('');
    setAmountHandler('');
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expenseTitle} onChange={titleClickHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={expenseAmount} step="0.01" min="0.01" onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={expenseDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={onCancelCreate}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
