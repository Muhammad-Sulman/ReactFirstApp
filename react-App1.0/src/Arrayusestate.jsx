import { useState } from "react";

function Arrayusestate() {
    const num = [1,2,3,4,5];
    let [number, setNumber] = useState(num);
    let changeList = () => {
        // setNumber([9,8,7,6,0]);
        setNumber(perviousState => {
            return [
                ...perviousState,
                Math.floor(Math.random() * 50)
                //98
            ]
        })
    }
    return (
        <div>
            {number.map((n, index) => <h1 key={index}> {n} </h1> )}
            <button type="button" onClick={changeList} >Update</button>
        </div>
    )
}

export default Arrayusestate