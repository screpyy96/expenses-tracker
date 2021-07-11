import React , {useState} from 'react'
import { format } from "date-fns";
import * as S from "./expense-item.styled";
import Card from "../card";

export interface Expenses {
  title?: string;
  amount?: string;
  date?: Date;
  items?: any;
}

const ExpensesItem = ({items}: Expenses): JSX.Element => {
  const [title, setTitle] = useState(items.title)
  const handleClick = () => {
    console.log(title)
    setTitle("cacat")
  };

  return (
    <Card key={items.id}>
      <S.StyledDate>{format(items.date, "MM/dd/yyyy")}</S.StyledDate>
      <S.StyledTitle>{title}</S.StyledTitle>
      <S.StyledPrice>{items.amount}</S.StyledPrice>
      <button onClick={handleClick}>change title</button>
    </Card>
  );
};

export default ExpensesItem;
