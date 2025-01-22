import React from 'react';

export default class Employee extends React.Component {

    state = {
                name: "suleman",
                age: 21
            };

    // constructor() {
    //     super();
    //     this.state = {
    //         name: "suleman",
    //         age: 21
    //     };
    // }

    // constructor(props) {
    //         super(props);
    //         this.state = {
    //             name: this.props.name,
    //             age: this.props.age
    //         };
    //     }

    changeState() {
        this.setState({
            name: "Updated Suleman",
            // age: 25
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <>
                <h1>Employee: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>
                <input
                    type="button"
                    value="click"
                    onClick={() => this.changeState()}
                />
            </>
        );
    }
}
