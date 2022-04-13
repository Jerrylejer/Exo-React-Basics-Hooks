import React, { Component } from 'react'

class ClassWillUnmount extends Component {
    constructor (props) {
        super(props)

        this.state ={
            keyCode: null
        }
    }

    addKeyCode = (e) => {
        // console.log(e);
        this.setState({
            keyCode: e.code
        })
    }

    componentDidMount () {
        // Au montage du component, j'écoute l'évènement et lui colle ma fonction addKeyCode
        //todo console.log('Le component est monté')
        document.addEventListener('keyup', this.addKeyCode)
    }

    componentWillUnmount() {
        // Au démontage du component, j'écoute l'évènement et lui enlève ma fonction addKeyCode
        //todo console.log('Le component est démonté')
        document.removeEventListener('keyup', this.addKeyCode)
    }

  render() {
      
    const {keyCode} = this.state;

    return (
      <div className="card">
          <div className="card-body">
              <h1 className="text-center">{keyCode}</h1>
          </div>
      </div>
    )
  }
}
export default ClassWillUnmount;