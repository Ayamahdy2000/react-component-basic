import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate"
function ExpenseItem(props) {

    return (<div className="expense-item">
        <div className="expense-item__date">
            <ExpenseDate date={props.date} />

        </div>

        <div className="expense-item__description">
            <h2 className="expense-item__title">{props.title}</h2>
            <div className="expense-item__price">  $ {props.amount}</div>
        </div>
    </div>)
}
export default ExpenseItem;