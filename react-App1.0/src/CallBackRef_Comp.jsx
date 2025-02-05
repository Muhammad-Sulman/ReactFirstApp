
import React from 'react'

export default class CallBackRef_Comp extends React.Component {

    constructor(props) {
        super(props)
        this.nameRef = null;
        this.setNameRef = (element) => {
            this.nameRef = element;
        }
    
    }

    componentDidMount(){
        console.log(this.nameRef);
        this.nameRef.focus();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        this.nameRef.style.color = 'green';
        this.nameRef.style.backgroundColor = 'white';
        console.log("Name = ", this.nameRef.value);
    }

    render() {
    return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Enter your Name: </label>
                    <input type="text" ref={this.setNameRef} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
