import React from 'react'
import './Externalcss.css'

export default class Externalcss extends React.Component {

    render() {
        let x = this.props.check ? 'color' : 'font';
    return (
            <div>
                {/* <h1 className='color'>M.Suleman</h1> */}
                {/* <h1 className='color font'>M.Suleman</h1> */}
                {/* <h1 className={x}>M.Suleman</h1> */}
                <h1 className={` ${x} thiredclass`}>M.Suleman</h1>
            </div>
        )
    }
}
