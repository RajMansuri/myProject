import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as foodStore } from './store/reducer';
function App() {
  const { noOfCake, noOfIceCream } = useSelector(state => state.foodStore);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{noOfCake}  </p>
      <button onClick={() => dispatch(foodStore.buyCake(2))} >Buy Cake</button>
      <p>{noOfIceCream}</p>
      <button onClick={() => dispatch(foodStore.buyIceCream(4))} >Buy IceCream</button>
      <button>Sell Cake</button>
      <button>Sell Ice-Cream </button>
      <h1>hii my name is raj</h1>
    </div>
  );
}

export default App;
