import {  useContext } from "react"
import { Friend, NameContext } from "./App"

function Comp_C() {
    const name = useContext(NameContext);
    const friend = useContext(Friend);
    return (
    <div>Comp_C
        <h1>My Name is : {name}</h1>
        <h1>My Friend is : {friend}</h1>
    </div>
    )
}

export default Comp_C