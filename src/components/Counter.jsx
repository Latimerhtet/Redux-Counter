import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAcions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const show = useSelector((state) => state.isShow);
  const [amount, setAmount] = useState(0);
  const increaseCount = () => {
    dispatch(counterAcions.increment());
  };
  const decreaseCount = () => {
    if (count > 0) {
      dispatch(counterAcions.decrement());
    }
  };

  const increseByAmount = () => {
    dispatch(counterAcions.incrementByAmount(+amount));
  };
  const clearAmount = () => {
    dispatch(counterAcions.clear());
    setAmount(0);
  };

  const toggle = () => {
    dispatch(counterAcions.toggle());
  };
  return (
    <div className="main">
      <h1>Counter</h1>
      {show && <p className="value">{count}</p>}
      <div className="buttons">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
      <div>
        <label htmlFor="">Enter the amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="amountBtn" onClick={increseByAmount}>
          +
        </button>
      </div>
      <button className="amountBtn" onClick={clearAmount}>
        Clear count
      </button>
      <button className="amountBtn" onClick={toggle}>
        Toggle
      </button>
    </div>
  );
};

export default Counter;
