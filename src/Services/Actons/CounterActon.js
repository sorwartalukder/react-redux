import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstants";

export const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};


export const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const resetCounterAction = () => {
    return {
        type: RESET,
    }
}
