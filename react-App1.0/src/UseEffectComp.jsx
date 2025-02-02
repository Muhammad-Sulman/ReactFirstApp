
import { useState, useEffect } from "react"


function UseEffectComp() {

    let [counter, setCounter]  = useState(0);
    useEffect(() =>{
        console.log("Hello iam useEffect.. " + counter)
    } )

    return (
        <div>
            <h1>{counter}</h1>
            <button type="button" onClick={() => {setCounter(counter + 1)}} >Update State</button>
        </div>
    )
}

export default UseEffectComp