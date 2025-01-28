import React from 'react'
// import './Stylesheet1.css'
import Style from './Stylesheet1.module.css'

export default class Stylesheet1 extends React.Component {
    render() {
    return (
        <div>
            {/* <h1 className='heading'>My Name Is M.Suleman..!</h1> */}
            <h1 className={Style.heading}>My Name Is M.Suleman..!</h1>
        </div>
    )
    }
}
