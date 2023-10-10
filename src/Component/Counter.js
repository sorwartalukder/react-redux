import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounterAction } from "../Services/Actons/CounterActon";

function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementCounter())
    };
    const handleDecrement = () => {
        dispatch(decrementCounter())
    };
    const handleReset = () => {
        dispatch(resetCounterAction())
    };
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={handleIncrement}>Increment</button><br />
            <button onClick={handleDecrement}>Decrement</button>  <br />
            <button onClick={handleReset}>Reset</button><br />
        </div>
    );
}

export default Counter;
