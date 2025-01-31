import { useState } from "react"


function Objusestate() {
    let obj = {
        name: "Suleman",
        age : 21,
        height: 5.10,
        isyoung: true
    }

    let [person, setPerson] = useState(obj);
    return (
        <div>
            <ul>
                <li>{person.name}</li>
                <li>{person.age}</li>
                <li>{person.height}</li>
                <li>{person.isyoung.toString()}</li>
            </ul>
        </div>
    )
}

export default Objusestate