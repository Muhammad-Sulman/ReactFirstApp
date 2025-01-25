

import React from 'react'

export default class EventBinding extends React.Component {

    constructor (){
        super();
        // this.HandleEvent = this.HandleEvent.bind(this);
        this.state = {
            name: "suleman"
        }
    }

    // HandleEvent(){
    //     console.log("Hello", this);
    //     this.setState({
    //         name: "Muzamil"
    //     });
    // }

    HandleEvent = () =>{
        console.log("Hello", this);
        this.setState({
            name: "Muzamil"
        });
    }

    render() {
    return (
        <div>
            <h1>Name: {this.state.name}</h1>
            {/* <button type="button" onClick={this.HandleEvent}>Click</button> */}
            {/* <button type="button" onClick={this.HandleEvent.bind(this)}>Click</button> */}
            {/* <button type="button" onClick={this.HandleEvent}>Click</button> this also work with arrow function */}
            <button type="button" onClick={() =>this.HandleEvent() }>Click</button>
        </div>
    )
    }
}
