import { useState } from "react"


export default function UsedstateComponent() {
    // const myArray = useState('Suleman'); 
    // // const [first, setfirst] = useState(second)
    // return (
    // <div>
    //     <h1>{myArray[0]}</h1>
    //     <button type="button" onClick={() => myArray[1]('Ali')} >Change Name</button>
    // </div>
    // )

    const [name, setName] = useState('Suleman');
    let changeState = () => {
        setName("Shah")
    }
    return (
    <div>
        <h1>{name}</h1>
        <button type="button" onClick={changeState} >Change Name</button>
    </div>
    )
}
