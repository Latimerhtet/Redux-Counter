import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [amount, setAmount] = useState(0);
  const increaseCount = () => {
    dispatch({ type: "increment" });
  };
  const decreaseCount = () => {
    if (count > 0) {
      dispatch({ type: "decrement" });
    }
  };

  const increseByAmount = () => {
    dispatch({ type: "increaseByAmount", amount: +amount });
  };
  const clearAmount = () => {
    dispatch({ type: "clear" });
  };
  return (
    <div className="main">
      <h1>Counter</h1>
      <p className="value">{count}</p>
      <div className="buttons">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
      <div>
        <label htmlFor="">Enter the amount</label>
        <input type="text" onChange={(e) => setAmount(e.target.value)} />
        <button className="amountBtn" onClick={increseByAmount}>
          +
        </button>
      </div>
      <button className="amountBtn" onClick={clearAmount}>
        Clear count
      </button>
    </div>
  );
};

export default Counter;
