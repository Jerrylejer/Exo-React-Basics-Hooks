import React, { Component } from 'react';

class ClassStates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    // handleClick = () => {
    //     this.setState({
    //         counter: this.state.counter + 1,
    //     });
    // }

    handleClick = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter +1,
            }
        })
    }

    render() {

        return (
            <div>
                <p>Class State: {this.state.counter}</p>
                <button className="btn btn-danger" onClick={this.handleClick}>State dans Class</button>
            
            </div>
        )
    }
}

export default ClassStates;
