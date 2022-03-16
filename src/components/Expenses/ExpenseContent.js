import ExpenseItem from "./ExpenseItem"
import NoData  from '../../assets/imgs/no-data.svg';
const ExpenseContent = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="no-data">
                <img src={NoData}  className="no-data__img"/>
               
                <p className="no-data__text">No Expense Found.</p>
            </div>
        )
    }
    return (<div>
        {props.items.map((expense, index) => (<ExpenseItem key={index} title={expense.title} date={expense.date} amount={expense.amount} />))}
    </div>)
}
export default ExpenseContent;