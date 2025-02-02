
import { useState, useEffect } from "react"


function UseEffectComp() {

    let [counter, setCounter]  = useState(0);
    let [name, setName]  = useState("Suleman");

    // useEffect(() =>{
    //     console.log("Hello iam useEffect.. " + counter)
    // } )

    // useEffect(() =>{
    //     console.log("Hello iam useEffect.. " + counter)
    // }, [] )

    // useEffect(() =>{
    //     console.log("Hello iam useEffect.. " + counter)
    // }, [counter] )

    // useEffect(() =>{
    //     console.log("Hello iam useEffect.. " + counter)
    // }, [counter, name] )

    useEffect(() =>{
        console.log("Hello iam useEffect.. " + counter)
    }, [counter] )

    useEffect(() =>{
        console.log("Hello iam useEffect.. " + name)
    }, [name] )

    return (
        <div>
            <h1>{counter}</h1>
            <h1>{name}</h1>
            <button type="button" onClick={() => {setCounter(counter + 1)}} >Update State</button>
            <button type="button" onClick={() => {setName("Muzamil")}} >Update Name</button>
        </div>
    )
}

export default UseEffectComp