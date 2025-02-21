import { useDispatch, useSelector } from "react-redux"
import {increment, decrement} from "../reduxtoolkit/CounterSlice"

function CounterReduxToolKit() {
    const myState  = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h2>Redux Counter</h2>
                    <h1 className="my-3">{myState}</h1>
                    <div className="d-flex gap-3">
                        <button className="btn btn-success" onClick={() => dispatch(increment())} >Increase</button>
                        <button className="btn btn-danger" onClick={() => dispatch(decrement())}  >Decrease</button>
                    </div>
                </div>
            </div>
    )
}

export default CounterReduxToolKit