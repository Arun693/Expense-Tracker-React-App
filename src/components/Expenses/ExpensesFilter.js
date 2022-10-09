import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onYearChangeHandler = (event) => {
    let value = event.target.value;
    props.handleYearChange(value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onYearChangeHandler} value={props.yearSelected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
