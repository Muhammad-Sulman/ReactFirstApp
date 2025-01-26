import React from 'react'
import Updating2 from './Updating2'

export default class Updating1 extends React.Component {

    constructor(props) {
    super(props)
    
        this.state = {
            name: "Suleman"
        }
        console.log("Constructor 1 called...")
    }

    changeState = () => {
        console.log("changeState 1 called...")
        this.setState({
            name: "Muzamil"
        })
    }

    render() {
        console.log("render 1 called...")
    return (
            <div>
                <Updating2 name={this.state.name}/>
                <button type="button" onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}
