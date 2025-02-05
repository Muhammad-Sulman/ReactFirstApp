import React, { createRef } from 'react'

export default class Refs extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = createRef();
    
    }
    
    componentDidMount(){
        console.log(this.myRef)
        console.log(this.myRef.current.innerHTML)
    }

    handleClick = () => {
        this.myRef.current.style.backgroundColor = "white"
        this.myRef.current.style.color = "green"
        // this.myRef.current.hidden = true;
        // this.myRef.current.align = "right"

    }

    render() {
    return (
        <div>
            <h1 ref={this.myRef}> Muhammad Suleman</h1>
            <button type="button" onClick={this.handleClick}>Click</button>
        </div>
        
        )
    }
}
