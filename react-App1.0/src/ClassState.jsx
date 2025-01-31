import React from 'react'

export default class ClassState extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {
        counter : 0
        }
    }

    Increment = () => {
        this.setState({counter: this.state.counter + 1})
    }

    Decrement = () => {
        this.setState({counter: this.state.counter - 1})
    }

    render() {
    return (
        <div>ClassState
            <h1>{this.state.counter}</h1>
            <button type="button" onClick={this.Increment}>Increment</button>
            <button type="button" onClick={this.Decrement}>Decrement</button>
        </div>
        )
    }
}
