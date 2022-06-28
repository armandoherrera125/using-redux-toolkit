import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementByAmount } from "./counterSlice";

export const Counter = () => {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    console.log(counter);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick= {()=> dispatch(increment())}>Increment</button>
            <button onClick={ ()=> dispatch(decrement())}>Decrement</button>
            <button onClick={ ()=> dispatch(incrementByAmount(5))}>By Amount</button>


        </div>
    )
}
