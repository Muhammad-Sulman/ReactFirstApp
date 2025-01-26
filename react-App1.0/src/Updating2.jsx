import React from 'react'

export default class Updating2 extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name2: this.props.name
        }
        console.log("Constructor 2 called...")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDrivedStateFromProps 2 called...")
        if(props.name !== state.name2){
            return {name2: props.name}
        }
        return null
    }


    render() {
        console.log("render 2 called...")
    return (
            <div>
                <h1>My name : {this.state.name2}</h1>
            </div>
        )
    }
}
