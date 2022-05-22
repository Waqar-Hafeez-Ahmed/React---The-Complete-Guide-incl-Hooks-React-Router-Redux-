import React,{useState} from "react";
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const changeFilter =(year)=>{
    setFilteredYear(year);
  }
  return (
    <div>
    <Card className = 'expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilter}/>
    <ExpenseItem
      title={props.item[0].title}
      date={props.item[0].date}
      amount={props.item[0].amount}
    />
    <ExpenseItem
      title={props.item[1].title}
      date={props.item[1].date}
      amount={props.item[1].amount}
    />
    <ExpenseItem
      title={props.item[2].title}
      date={props.item[2].date}
      amount={props.item[2].amount}
    />
    <ExpenseItem
      title={props.item[3].title}
      date={props.item[3].date}
      amount={props.item[3].amount}
    />
  </Card>;
  </div>)
}

export default Expenses;