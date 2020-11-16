import React, {useState, useContext } from 'react';
import {TransactionsContext} from './transContext';


function Child() {
    let {transactions, addTransaction } = useContext(TransactionsContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    

    const handleAddition = (event) =>{
        event.preventDefault();
        if(Number(newAmount) ===0){
          alert("Please enter correct value");
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }

    const getIncome = () => {
      let income = 0;
       for (var i = 0; 1 < transactions.lenght; i++) {
        if (transactions[i].amount > 0)
          income = income + transactions[i].amount
      }
      return income;
    }

    const getExpense = () => {
      let expense = 0;
      for (var i = 0; i < transactions.lenght; i++){
        if (transactions[i].amount < 0)
        expense += transactions[i].amount
      }
      return expense;
    }
  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>

  <h3>Your Balance <br /> ${getIncome() + getExpense()} </h3>
      
      <div className="expense-container">
  <h3>INCOME <br />${getIncome()}</h3>
  <h3>EXPENSE <br />${getExpense()}</h3>

      </div>

      <h3>Histroy</h3>
      <hr />
      
      <ul className="transactions-list">
          {transactions.map((transObj, ind) => {
              return(<li key={ind}>
                 <span>{transObj. desc}</span>
                 <span>${transObj. amount}</span>
              </li>
               )
           })}
      </ul>

        <h3>Add new Transactions</h3>
        <hr />

        <form className="Transaction-forms" onSubmit={handleAddition}>
          <label>
            Enter Description <br />
            <input type="text"
            placeholder="Description" 
            onChange={(ev)=>setDesc(ev.target.value)} 
            required/>
          </label>
          
          <br />
          
          <label>
            Enter Amount <br />
            <input type="number"
            placeholder="Amount" 
            onChange={(ev)=>setAmount(ev.target.value)} 
            required/>
          
          </label>
          
          <br />
         
          <input type="Submit" value="Submit Transaction" />

        </form>
    </div>
  );
}

export default Child;