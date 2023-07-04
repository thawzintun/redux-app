import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counterReducer";

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter);

    const isShow = useSelector((state) => state.counter.isShow);

    const decreaseHandler = () => {
        dispatch(counterAction.decrease());
    };

    const increaseBy5Handler = () => {
        dispatch(counterAction.increaseByCustom(5));
    };

    const increaseHandler = () => {
        dispatch(counterAction.increase());
    };

    const toggleHandler = () => {
        dispatch(counterAction.toggle());
    };

    return (
        <section>
            <h3>Redux Counter</h3>
            {isShow && <h1>{counter}</h1>}
            <hr />
            <div>
                <button onClick={decreaseHandler}>Decrease</button>
                <button onClick={increaseBy5Handler}>IncreaseBy5</button>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={toggleHandler}>Toggle Counter</button>
            </div>
        </section>
    );
};

export default Counter;
