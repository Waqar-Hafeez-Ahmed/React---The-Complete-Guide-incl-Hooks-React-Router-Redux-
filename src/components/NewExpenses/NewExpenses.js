import React from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
   const dataHandler = (dataHere)=>{
   const expenseData = { 
    ...dataHere
   }
   props.onAppChange(expenseData);
}
   return <div className='new-expense'>
    <ExpenseForm onNewExpense = {dataHandler}/>

    </div>
};

export default NewExpense;