
import { useState } from "react";
import "./Expenses.scss"
import ExpenseFilter from "./ExpenseFilter";
import ExpenseContent from "./ExpenseContent";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
    // const expense = []
    const [value, setValue] = useState('');
    const onChangeFilter = (filter) => {
        setValue(filter)
        // props.getFilterValue(filter)
    }

    const filterChange = props.items.filter(expense => value == '' || expense.date.getFullYear().toString() === value)

    return (<div className="expenses">
        <ExpenseFilter value={value} onChangeFilter={onChangeFilter} />
        <ExpenseChart expenses={filterChange} />
        <ExpenseContent items={filterChange} />
       

    </div>)
}
export default Expense;