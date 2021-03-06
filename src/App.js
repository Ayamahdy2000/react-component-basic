import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import ExpenseFrom from "./components/AddExpenses/ExpensesFrom";
import Chart from "./components/charts/Chart";
import ExpenseChart from "./components/Expenses/ExpenseChart";
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  // const [value, setValue] = useState('');
  
  //methods
  const addNewExpense = (expense) => {
    setExpenses((preExpenses) => {
      return [{ ...expense, id: Math.random.toString }, ...preExpenses]
    });
  };

  return (
    <div>
      <ExpenseFrom onSubmitExpense={addNewExpense} />

      <Expenses items={expenses} />

    </div>
  );
}

export default App;
