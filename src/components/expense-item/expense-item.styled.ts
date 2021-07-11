import styled from "styled-components"

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  font-size: 1.25rem;
`
const StyledTitle = styled.div`
  color: #3a3a3a;
  font-size: 1.6rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: end;
  align-items: center
`
const StyledDate = styled.div`
display: flex;
width: 5.5rem;
height: 5.5rem;
border: 1px solid #ececec;
background-color: #2a2a2a;
color: white;
border-radius: 12px;
align-items: center;
margin: 0 auto;
font-weight: bold;
font-size: 0.75rem;
padding: 10px
`
const StyledPrice = styled.div`
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  border-radius: 12px;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 105px;
`

export {
  ExpensesWrapper,
  StyledTitle,
  StyledPrice,
  StyledDate
}