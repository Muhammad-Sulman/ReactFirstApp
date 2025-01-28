import React from 'react'
// import './Stylesheet2.css'
import Style from './Stylesheet2.module.css'

export default class Stylesheet2 extends React.Component {
    render() {
    return (
        <div>
            <h1 className={Style.heading}>Hey this is Style sheet 2..!</h1>
        </div>
    )
    }
}
