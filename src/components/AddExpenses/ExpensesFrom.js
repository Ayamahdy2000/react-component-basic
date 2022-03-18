import "./ExpensesFrom.scss"
import { useState } from "react";

const ExpenseFrom = (props) => {
    //States
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [showFrom, changeShowFrom] = useState(false)

    //Methods
    const changeTitleHandler = (event) => {
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        // setUserInput((preState) => {
        //     return {
        //         ...preState,
        //         title: event.target.value
        //     }

        // })
    }
    const changeAmountHandler = (event) => {
        setAmount(event.target.value)

    }
    const changeDateHandler = (event) => {
        setDate(event.target.value)

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        changeShowFrom(false)
        props.onSubmitExpense(expenseData)
        setAmount('')
        setDate('')
        setTitle('')

    }
    const onShowFrom = () => {
        changeShowFrom(true)
    }
    const onHideFrom = () => {
        changeShowFrom(false)
    }

    //JSX
    return <div className="new-expense">
        {showFrom ?
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls ">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={changeTitleHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={changeAmountHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={date} onChange={changeDateHandler} />
                    </div>
                </div>
                <div className="new-expense__actions ">
                    <button type="submit" onClick={onHideFrom}>Cancel</button>
                    <button type="submit" >Add Expense</button>
                </div>
            </form> : <button type="submit" onClick={onShowFrom}>Add New Expense</button>}
    </div>
}
export default ExpenseFrom;