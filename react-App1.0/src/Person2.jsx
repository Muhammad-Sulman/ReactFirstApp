import React from 'react'

export default class Person2 extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "M.Suleman"
        }
        console.log("constructor called...")
    }

    changeState = () => {
        this.setState({
            name: "Muzamil"
        })
        console.log("Button clicked ...")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps Called....")
        console.log(props)
        console.log(state)
        return null
    }

    shouldComponentUpdate(nextprops, nextstate){
        console.log("shouldComponentUpdate called....")
        console.log(nextprops)
        console.log(nextstate)
        // return false
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
        console.log("getSnapshotBeforeUpdate ... ")
        return "hello"
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
        console.log("componentDidUpdate ... ")
    }

    render() {
        console.log("render called...")
    return (
            <div>
                
                <h1>{this.state.name}</h1>
                <h1>{this.props.city}</h1>
                <button type="button" onClick={this.changeState} >Change State</button>
            </div>
        )
    }
}
