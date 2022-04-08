import './CounterComponent.style.css';
import { useSelector, useDispatch } from 'react-redux';
const CounterComponent = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }
    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    }

    return (
        <main className="counter">
            <h1>Redux Counter</h1>
            <div className="value">{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        </main>
    );
};

export default CounterComponent;
