import { useState } from "react"


function Objusestate() {
    let obj = {
        name: "Suleman",
        age : 21,
        height: 5.10,
        isyoung: true
    }

    let [person, setPerson] = useState(obj);
    // let changeState = () => {
    //     setPerson({
    //         name: "Ali",
    //         age: 27,
    //         height: 5.4,
    //         isyoung: true
    //     });
    // }

    let changeState = () => {
        setPerson(perviousState => {
            return{
            ...perviousState,
                name: "Ali"
            }
            
        });
    }
    
    return (
        <div>
            <ul>
                <li>{person.name}</li>
                <li>{person.age}</li>
                <li>{person.height}</li>
                <li>{person.isyoung.toString()}</li>
            </ul>
            <button onClick={changeState}>Update</button>
        </div>
    )
}

export default Objusestate