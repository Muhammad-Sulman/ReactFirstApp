import { useState } from "react"


function FunctionalState() {
    let [counter, setCounter] = useState(0);

    let Increment = () => {
        setCounter(counter + 1);
    }

    let Decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>FunctionalState
            <h1>{counter}</h1>
            <button type="button" onClick={Increment}>Increment</button>
            <button type="button" onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default FunctionalState