
import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
  <>
  <GlobalProvider>
  <Header/>
  <Balance/>
  <IncomeExpense/>
  <TransactionList/>
  <AddTransaction/>
  </GlobalProvider>
  </>
  
  );
}

export default App;
