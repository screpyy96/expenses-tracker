import React from 'react';
import ExpensesForm from '../expense-form';
import * as S from '../expenses/expenses.styled'

const NewExpenses = () => {
    return (
        <S.StyledWrapper>
            <ExpensesForm />
        </S.StyledWrapper>
    );
};

export default NewExpenses;