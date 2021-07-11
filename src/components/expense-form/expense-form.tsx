import React, { useState } from "react";
import * as S from "../expense-item/expense-item.styled";
interface Expense {
  value?: any;
  target?: any;
  preventDefault?: any;
  inputTitle?: string
  submitHandler?: void
}
const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const handleTitle = (e: Expense) => {
    setInputTitle(e.target.value);
    console.log(inputTitle);
  };
  const handleDate = (e: Expense) => {
    setInputDate(e.target.value);
    console.log(inputTitle);
  };
  const handleAmount = (e: Expense) => {
    setInputAmount(e.target.value);
    console.log(inputTitle);
  };

  const submitHandler = (e: Expense) => {
    e.preventDefault();
    const expensesData = {
      title: inputTitle,
      date: inputDate,
      amount: inputAmount,
    };
    console.log(expensesData);
    setInputTitle("")
    setInputDate("")
    setInputAmount("")

  };

  return (
    <form onSubmit={submitHandler}>
      <S.ExpensesWrapper>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" onChange={handleTitle} value={inputTitle} />
        </div>
        <div>
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmount}
            value={inputAmount}
          />
        </div>
        <div>
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2020-12-12"
            max="2025-12-12"
            onChange={handleDate}
            value={inputDate}
          />
        </div>
      </S.ExpensesWrapper>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
