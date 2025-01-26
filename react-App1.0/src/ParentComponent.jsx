import React from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends React.Component {

    ParentMethod(name, surname){
        alert(`Method from parent ${name} and ${surname}`)
    }

  render() {
    return (
      <div>
        <ChildComponent callmethod={this.ParentMethod} ></ChildComponent>
      </div>
    )
  }
}
