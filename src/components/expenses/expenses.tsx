import ExpensesItem from "../expense-item";
import * as S from "./expenses.styled";

const expenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: "£ 300",
    date: new Date('05 October 2011'),
  },
  {
    id: 2,
    title: "Food",
    amount: "£ 200",
    date: new Date('05 October 2011 14:48 UTC'),
  },
  {
    id: 3,
    title: "Sports",
    amount: "£ 100",
    date: new Date('05 October 2011 14:48 UTC'),
  },
  {
    id: 4,
    title: "Restaurant",
    amount: "£ 400",
    date: new Date('05 October 2011 14:48 UTC'),
  },
  {
    id: 5,
    title: "Bills",
    amount: "£ 900",
    date: new Date('05 October 2011 14:48 UTC'),
  },
];

const Expenses = () => {
  return (
    <div>
      <S.StyledWrapper>
        {expenses.map((items) => (

            <ExpensesItem
            key={items.id}
             items={items}
            />

        ))}
      </S.StyledWrapper>
    </div>
  );
};

export default Expenses;
