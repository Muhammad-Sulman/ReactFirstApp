import { useEffect, useRef } from "react"


function UseRefHook_Comp() {
    
    const nameRef = useRef();
    const ageRef = useRef();

    useEffect(() => {
        console.log(nameRef);
        console.log(ageRef);
        nameRef.current.focus();
    })     

    const handleSubmit = (e) => {
        e.preventDefault();
        nameRef.current.style.color = 'green';
        console.log("name = ",nameRef.current.value, " Age = ", ageRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Your Name: </label>
                <input type="text" ref={nameRef} />
                <br /><br />
                <label htmlFor="">Enter Your Age: </label>
                <input type="number" ref={ageRef} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default UseRefHook_Comp