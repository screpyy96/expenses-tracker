import React from "react";
import ExpensesItem from "../components/expense-item/expenses-item";

const expenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: "300",
    date: new Date("2021, 7, 9"),
  },
  {
    id: 2,
    title: "Car Insurance",
    amount: "300",
    date: new Date("2021, 7, 9"),
  },
  {
    id: 3,
    title: "Car Insurance",
    amount: "300",
    date: new Date("2021, 7, 9"),
  },
  {
    id: 4,
    title: "Car Insurance",
    amount: "300",
    date: new Date("2021, 7, 9"),
  },
  {
    id: 5,
    title: "Car Insurance",
    amount: "300",
    date: new Date("2021, 7, 9"),
  },
];

const App = () => {
  const expensesConfig = expenses.map((item, index) => {
    return (
      <ExpensesItem
        key={index}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  return <div>{expensesConfig}</div>;
};

export default App;
