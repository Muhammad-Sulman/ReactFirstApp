
import React from 'react'

// function Customer({name, age}) {
//     return (
//         <>
//             <h1>Customer: {name}</h1>
//             <h1>Age: {age}</h1>
//         </>
//     )
// }


// function Customer(props) {
//     const {name, age} = props
//     return (
//         <>
//             <h1>Customer: {name}</h1>
//             <h1>Age: {age}</h1>
//         </>
//     )
// }




// class Customer extends React.Component {
//     render() {
//         const {name, age} = this.props
//     return (
//             <>
//                 <h1>Customer: {name}</h1>
//                 <h1>Age: {age}</h1>
//             </>
//         )
//     }
// }



class Customer extends React.Component {

    state = {
        name: "suleman.",
        age: 21
    }

    render() {
        const {name, age} = this.state
    return (
            <>
                <h1>Customer: {name}</h1>
                <h1>Age: {age}</h1>
            </>
        )
    }
}



export default Customer