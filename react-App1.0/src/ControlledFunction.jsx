import { useState } from "react"


function ControlledFunction() {
    const [name, setName] = useState("Suleman");

    let handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        console.log(e.target[0].value);
        // alert(e.target[0].value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Enter Your Name: </label>
                <input type="text"  value={name}  onChange={(e) => {setName(e.target.value.toUpperCase())}}/>
                <br />
                <br />
                <button type="submit" value="Submit" >Submit</button>
            </form>
        </div>
    )
}

export default ControlledFunction