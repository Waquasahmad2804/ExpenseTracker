import React, {  useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpense = () => {

  const {transactions}=useContext(GlobalContext)

  const amounts=transactions.map(transaction=>transaction.amount);
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const Income=amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const Expense=amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2) * -1
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{`\u20B9`}{(Income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{`\u20B9`}{(Expense)}</p>
        </div>
      </div>

   
   
  )
}
