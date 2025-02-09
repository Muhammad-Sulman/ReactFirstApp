import { useState } from "react"


function Validation() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const handleName = (e) => {
        let name = e.target.value;
        if (name.length < 3) {
            setNameError(true);
        } else {
            setNameError(false)
        }
        setName(name);
    }

    const handleEmail = (e) => {
        let email = e.target.value;
        if (!email.match(emailRegex)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(e.target[0].value + "  " + e.target[1].value);
        let name = e.target[0].value;
        if (name.length < 3) {
            setNameError(true);
        } else {
            setNameError(false)
        }

        let email = e.target[1].value;
        if (!email.match(emailRegex)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    return (
        <div><h1>Validation</h1>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Your Name:  </label>
            <input type="text" name="name" value={name} onChange={handleName} required />            
            <br />
            {nameError ? <span style={{color:'red'}}>Lenght of name is less then 3 charactors</span>: ""}
            <br /><br />
            <label htmlFor="">Enter Your Name:  </label>
            <input type="text" name="email" value={email} onChange={handleEmail} required />
            <br />{emailError ? <span style={{color:'red'}}> Invalid Email </span>: ""}
            <br />
            <input type="submit" value="submit" />
            <br /><br />
        </form>
        </div>
    )
}

export default Validation