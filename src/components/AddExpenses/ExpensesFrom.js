import "./ExpensesFrom.scss"
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
const ExpenseFrom = (props) => {
    //States
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })
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
            title : title,
            amount : amount,
            date : new Date(date)
        }
        props.onSubmitExpense(expenseData)
        setAmount('')
        setDate('')
        setTitle('')
      
    }
    //JSX
    return <div className="new-expense">
  
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
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    </div>
}
export default ExpenseFrom;