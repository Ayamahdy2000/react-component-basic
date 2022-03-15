import ExpenseItem from "./ExpenseItem"
import { useState } from "react";
import "./Expenses.scss"
import ExpenseFilter from "./ExpenseFilter";
function Expense(props) {
    // const expense = []
    const [value, setValue] = useState('');
    const onChangeFilter = (filter) => {
        setValue(filter)
        props.getFilterValue(filter)
    }

    // for (const [index, value] of props.array.entries()) {
    //     expense.push(<ExpenseItem key={index} title={value.title} date={value.date} amount={value.amount} />)
    // }
    return (<div className="expenses">
        <ExpenseFilter selected={value} onChangeFilter={onChangeFilter} />
        {props.items.map((expense,index) => (<ExpenseItem key={index}   title={expense.title} date={expense.date} amount={expense.amount} />))}

    </div>)
}
export default Expense;