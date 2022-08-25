import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <Button
          aria-label="Decrement value"
          variant="contained"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          aria-label="Increment value"
          variant="contained"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row}>
        <input
          aria-label="Set increment amount"
          variant="contained"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button 
        variant="contained"
        onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button 
        variant="contained"
        onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </Button>
        <Button 
        variant="contained"
        onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </div>
    </div>
  );
}
