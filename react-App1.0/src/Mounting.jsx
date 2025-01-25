import Mounting2 from './Mounting2'

import React from 'react'

export default class Mounting extends React.Component {
    
    constructor(){
        super() 
        this.state = {
            name: "Suleman"
        }
        console.log("Mounting 1 Constructor invoked....!")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Mounting 1 getDerivedStateFromProps invoked....!")
        console.log(state)
        console.log(props)
        return null;
    }

    componentDidMount(){
        console.log("Mounting 1 componentDidMount invoked....!")
    }

    render() {
        console.log("Mounting 1 Render invoked....!")
    return (
            <div>Mounting
            <Mounting2 name="M.Suleman" ></Mounting2>
            </div>
        )
    }
}
