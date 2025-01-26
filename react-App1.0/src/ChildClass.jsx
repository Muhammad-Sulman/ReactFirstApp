import React from 'react'

export default class ChildClass extends React.Component {
    componentWillUnmount(){
        console.log("componentWillUnmount  Called .....")
    }
    render() {
        console.log("child render called")
        return (
                <div>
                    <h1>M.Suleman</h1>
                </div>
            )
        }
}
