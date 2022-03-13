import ExpenseItem from "./ExpenseItem"
function Expense(props) {
    const expense = []

    for (const [index, value] of props.array.entries()) {
        expense.push(<ExpenseItem key={index} title={value.title} date={value.date} amount={value.amount} />)
    }
    return (<div>

        {expense}

    </div>)
}
export default Expense;