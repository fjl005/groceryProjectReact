import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import GroceryCardsList from './groceries/GroceryCardsList';
import BudgetInput from './components/BudgetInput';
import Summary from './summary/Summary';

function App() {
  return (
    <div className="App">
      <Header/>
      <BudgetInput />
      <GroceryCardsList />
      <Summary />
    </div>
  );
}

export default App;
