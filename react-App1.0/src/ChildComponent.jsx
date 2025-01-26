import React from 'react'

export default class ChildComponent extends React.Component {
  render() {
    return (
      <div>
            {/* <button onClick={this.props.callmethod}>Click Me</button> */}
            <button onClick={() => this.props.callmethod('suleman', 'Maitlo')}>Click Me</button>
      </div>
    )
  }
}
