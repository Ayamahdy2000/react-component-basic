import "./ExpenseDate.scss"
function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const year = props.date.toLocaleString('en-us', { year: 'numeric' });
    const day = props.date.toLocaleString('en-us', { day: 'numeric' });
    return (<div className="expense-date ">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-day">{day}</div>
    </div>)
}
export default ExpenseDate;