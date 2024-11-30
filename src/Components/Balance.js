import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";


export const Balance=()=>{
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transaction=>transaction.amount);
    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return(
        <>
        <span><h1>Your Balance </h1>
        <h3 id="Balance">{`\u20B9`}{total}</h3></span>



        </>
    )
}