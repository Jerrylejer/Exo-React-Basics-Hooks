import React, { Component } from 'react';

class CycleVieComp extends Component {

    constructor (props) {
        super(props)

        this.state = {
            count: 0,
            name:''
        }
    }

    incrementAction = () => {
        this.setState(prevState => {
            return {
                count: prevState.count +1
            }
        })
    }

    // Le compteur de l'onglet title s'initialise à 0 au montage du component (et il ne bougera plus)
    componentDidMount () {
        document.title = `Page cliquée ${this.state.count}`
    }

    // Pour incrémenter le compteur title paralèllement aux update du state count => il doit détecter l'update (sinon il ne bougera pas)
    // ATTENTION => >Il faut utiliser soit le prevProps soit le prevState pour déclencher l'update de manière judicieuse et justifiée
    componentDidUpdate (prevProps, prevState) {
        if(this.state.count !== prevState.count) {
            document.title = `Page cliquée ${this.state.count}`
            // L'update se fait à l'incrémentation du count et non à l'input
            console.log('Cycle de vie: Mise à jour du Title')
        }
    }

    render () {
        return (
            <div>
                <h2 className="text-secondary">Cycles de vie Vs useEffect</h2>
                <p>Mon Class compteur: {this.state.count}</p>
                <button className="btn btn-success m-2" onClick={this.incrementAction}>Incrémentation</button>
                <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
            </div>
        )
    }
}
export default CycleVieComp;