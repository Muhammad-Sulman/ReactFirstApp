import React from 'react'

export default class StylingComponent extends React.Component {

    constructor() {
        super()
    
    this.state = {
            active : false
        }
    }

    changeState = () => {
        this.setState ({
            active: true
        });
    }


    render() {

    // let obj = {
    //     color: "green",
    //     backgroundColor:"white"
    // }

    // let obj2 = {
    //     fontSize: "50px",
    //     fontFamily: "cooper"
    // }

    let obj3 = {
        color: "green",
        backgroundColor:"white",
        fontSize: "50px",
        fontFamily: "cooper"
    }

    if (this.state.active) {
        obj3.color = "blue";
        obj3.fontSize = "70px";
    }

    return (
            <div>
                {/* <h1 style={{color:"red"}} >M.Suleman</h1> */}
                {/* <h1 style={{color:"red", backgroundColor:"white"}} >M.Suleman</h1> */}
                {/* <h1 style={obj} >M.Suleman</h1> */}
                {/* <h1 style={{...obj, ...obj2}} >M.Suleman</h1> */}
                <button type="button" style={obj3} onClick={this.changeState}  >M.Suleman</button>
            </div>
        )
    }
}
