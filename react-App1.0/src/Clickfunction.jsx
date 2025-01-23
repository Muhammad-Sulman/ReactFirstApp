




// export default function Clickfunction() {
    
//     function HelloFunction() {
//         alert("Hello Brother! ")
//     }

//     return (
//         <div>
//             <input type="button" value="click" onClick={HelloFunction} />
//         </div>
//     )
// }


// import React from 'react'

// export default class Clickfunction extends React.Component {

//     HelloFunction() {
//                 alert("Hello Brother! ")
//             }

//     render() {
//     return (
//         <div>
//             <input type="button" value="click" onClick={this.HelloFunction} />
//         </div>
//     )
//     }
// }



export default function Clickfunction(props) {
    
    const HelloFunction = (name) => {
        alert("Hello Brother! " + name )
    }

    return (
        <div>
            <input type="button" value="click" onClick={() => HelloFunction(props.name) } />
        </div>
    )
}