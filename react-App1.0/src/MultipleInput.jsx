import React from 'react'

export default class MultipleInput extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
        name: "",
        email: ""
        }
    }

    handleChange = (e) => {
        // console.log(e.target.value + " => " + e.target.name)
        const new_value =  (e.target.name === 'email') ? e.target.value.toLowerCase() : e.target.value;
        this.setState({
            [e.target.name] : new_value    //The square brackets ([]) in [e.target.name] are used for computed property names in JavaScript. This allows us to dynamically set the key of the object when updating the state. JavaScript would treat e.target.name as a literal key, not as a variable. This would cause an error.
        })
    }

    render() {
    return (
            <div>
                <form>
                    <label htmlFor="">Enter Your Name: </label>
                    <input type="text" name="name" value={this.state.name}  onChange={this.handleChange}/>
                    <br />
                    <br />
                    <label htmlFor="">Enter Your Email: </label>
                    <input type="email" name="email" value={this.state.email}  onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
