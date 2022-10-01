import React from "react";
import "./App.css";
import Header from "./compoonent/Header";
import Balance from "./compoonent/Balance";
import IncomeExpense from "./compoonent/IncomeExpense";
import TransactionList from "./compoonent/TransactionList";
import AddTransaction from "./compoonent/AddTransaction";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
