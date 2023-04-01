import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import GroceryCardsList from './groceries/GroceryCardsList';
import GroceryCard from './groceries/GroceryCard';

function App() {
  return (
    <div className="App">
      <Header />
      <GroceryCardsList />
    </div>
  );
}

export default App;
