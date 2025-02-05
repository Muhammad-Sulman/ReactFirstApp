import React from 'react'
import { createRef } from 'react'

export default class UnControlled_Comp extends React.Component {
    constructor(props) {
        super(props)
        this.nameRef = createRef();
        this.ageRef = createRef();
    }

    componentDidMount(){
        console.log(this.nameRef);
        console.log(this.ageRef)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Name = ", e.target[0].value);
        // console.log("Name = ", e.target[1].value);
        //method 1
        console.log("Name = ", this.nameRef.current.value);
        console.log("Name = ", this.ageRef.current.value);
        // method 2
        let email = document.getElementById('email').value;
        console.log("Email = ", email);
    }

    render() {
    return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Enter Name: </label>
                    <input type="text" ref={this.nameRef} />
                    <br /><br />
                    <label htmlFor="">Enter Age: </label>
                    <input type="number" ref={this.ageRef} />
                    <br /><br />
                    <label htmlFor="">Enter Email: </label>
                    <input type="email" id='email' />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
