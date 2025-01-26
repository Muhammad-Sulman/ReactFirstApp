import React from 'react'
import ChildClass from './ChildClass'

export default class Parentclass extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            active: true
        }
        console.log("Parent constructor called")
    }


    changeState = () => {
        this.setState({
            active: false
        })
        console.log("Button clicked")
    }

    render() {
        console.log("Parent render called")
    return (
            <div>
                {this.state.active ? <ChildClass/> : <h1>Component Deleted..</h1>}
                <button type="button" onClick={this.changeState} >Change State</button>
            </div>
        )
    }
}
