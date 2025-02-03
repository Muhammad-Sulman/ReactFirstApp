import React from 'react'

export default class ControlledComp extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "Suleman"
        }
    }

    handleForm = (event) => {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
            // name: event.target.value.toLowerCase()
            // name: event.target.value.toLowerCase().substring(0, 15)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target[0].value)
        console.log(e.target[0].value.toUpperCase())
    }

    render() {
    return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Enter Your Name: </label>
                    <input type="text" value={this.state.name}  onChange={this.handleForm} />
                    <br />
                    <button type="submit"  value="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
