import styled from "styled-components"

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;
  font-size: 1.25rem;
`
const StyledTitle = styled.div`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
`
const StyledDate = styled.div`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
`
const StyledPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
`

export {
  ExpensesWrapper,
  StyledTitle,
  StyledPrice,
  StyledDate
}