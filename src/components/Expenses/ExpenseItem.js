import { useState } from "react";
import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

function ExpenseItem(props) {

  
    return (
        <div>
    
            <Card className="expense-item" >
                <div className="expense-item__date">
                    <ExpenseDate date={props.date} />

                </div>

                <div className="expense-item__description">
                    <h2 className="expense-item__title">{props.title}</h2>
                    <div className="expense-item__price">  $ {props.amount}</div>

                </div>
            </Card> </div>)
}
export default ExpenseItem;