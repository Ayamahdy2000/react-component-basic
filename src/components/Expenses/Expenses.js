import ExpenseItem from "./ExpenseItem"
import { useState } from "react";
import "./Expenses.scss"
import ExpenseFilter from "./ExpenseFilter";
function Expense(props) {
    const expense = []
    let [value, setValue] = useState('');
    const onChangeFilter = (filter) => {
        setValue(filter)
    }

    for (const [index, value] of props.array.entries()) {
        expense.push(<ExpenseItem key={index} title={value.title} date={value.date} amount={value.amount} />)
    }
    return (<div className="expenses">
        <ExpenseFilter selected={value} onChangeFilter={onChangeFilter} />
        {expense}

    </div>)
}
export default Expense;