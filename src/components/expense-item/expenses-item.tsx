import React from "react";
import { format } from 'date-fns'
import * as S from "./expense-item.styled";

interface Expenses {
  id?: number;
  title?: string;
  amount?: string;
  date?: any;
}

const ExpensesItem  = ({id, title, amount, date}: Expenses) => {
  return (
    <S.ExpensesWrapper key={id}>
      <S.StyledDate>{format(date, "MMMM do, yyyy")}</S.StyledDate>
      <S.StyledTitle>{title}</S.StyledTitle>
      <S.StyledPrice>{amount}</S.StyledPrice>
    </S.ExpensesWrapper>
  );
};

export default ExpensesItem;
