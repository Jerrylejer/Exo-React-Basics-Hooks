import React, { Component } from 'react'
import ClassWillUnmount from './ClassWillUnmount';

class ClassComp extends Component {
    constructor (props) {
      super(props)

      this.state = {
        show: true
      }
    }

    showToggle = (e) => {
      this.setState({
        show: !this.state.show
      })
    }

  render () {
      return (
        <div className="text-center">
            <p>Le démontage du composant avec le componentWillUnmount</p>
            <button className="btn btn-primary m-3" onClick={this.showToggle}>{this.state.show ? 'cacher' : 'afficher'}</button>
          {
              this.state.show && <ClassWillUnmount />
          }
        </div>
      )
  }
}
export default ClassComp;
