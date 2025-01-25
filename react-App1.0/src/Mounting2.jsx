import React from 'react'

export default class Mounting2 extends React.Component {
    
    constructor(){
        super() 
        this.state = {
            name: "Suleman"
        }
        console.log("Mounting 2 Constructor invoked....!")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Mounting 2 getDerivedStateFromProps invoked....!")
        console.log(state)
        console.log(props)
        return null;
    }

    componentDidMount(){
        console.log("Mounting 2 componentDidMount invoked....!")
    }

    render() {
        console.log("Mounting 2 Render invoked....!")
    return (
            <div>Mounting2</div>
        )
    }
}
