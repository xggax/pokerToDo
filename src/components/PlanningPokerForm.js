import React, { Component } from 'react';
import PlanningPokerCards from './PlanningPokerCards';
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class PlanningPokerForm extends Component {

    constructor(props) {
        super(props);
        let _name4, _gameName1, _typeOfCards3, _gameDescription2;
        this.state = {
            gameName1: '',
            gameDescription2: '',
            typeOfCards3: '',
            name4: ''
        };

        this.handleChangeInputGameName = this.handleChangeInputGameName.bind(this);
        this.handleChangeInputGameDescription = this.handleChangeInputGameDescription.bind(this);
        this.handleChangeSelectTypeOfCards3 = this.handleChangeSelectTypeOfCards3.bind(this);
        this.handleChangeInputName4 = this.handleChangeInputName4.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert('o valor digitado: ' + ' ' + this.state.gameName1 + ' ' + this.state.gameDescription2 + ' ' + this.state.typeOfCards3
        + ' ' + this.state.name4);
        this.clearForm();
    }

    handleChangeInputGameName(event) {
        this.setState({ gameName1: event.target.value });
    }

    handleChangeInputGameDescription(event) {
        this.setState({ gameDescription2: event.target.value });
    }

    handleChangeSelectTypeOfCards3(event) {
        this.setState({ typeOfCards3: event.target.value });
    }

    handleChangeInputName4(event) {
        this.setState({ name4: event.target.value });
    }

    clearForm() {
        this.setState({gameName1: ''});
    }

    myFunction(){
        
    }

    render() {
        return (

            <div className="container">
                <h1 class="center">Configuração da sala do Game</h1>
                <form onSubmit={this.handleSubmit} id="configForm">

                    <label className="sr-only" for="gameName1">Nome do Projeto</label>
                    <input type="text" value={this.state.gameName1} onChange={this.handleChangeInputGameName} 
                    /*ref={input => _gameName1 = input}*/ className="form-control mb-2 mr-sm-2" id="gameName1" placeholder="Nome do Projeto" /><br />

                    <label className="sr-only">Descrição do Projeto</label>
                    <input type="text" value={this.state.gameDescription2} onChange={this.handleChangeInputGameDescription} 
                    /*ref={input => _gameDescription2 = input}*/ className="form-control mb-2 mr-sm-2" id="gameDescription2" placeholder="Descrição do Projeto" /><br />

                    <label className="sr-only" for="typeOfCards3">Tipo de Cartas</label>
                    <select value={this.state.typeOfCards3} onChange={this.handleChangeSelectTypeOfCards3} 
                    className="form-control mb-2 mr-sm-2" id="cardstype3">
                        <option selected value="fibonnaci">Fibonnaci</option>
                        {/*<option value="scrum">Scrum</option>
                        <option value="sequence">Sequencial</option>
                        <option value="t-shirt">T-Shirt</option>*/}
                    </select>
                    <br/>

                    <label className="sr-only" for="name4">Nome do Player</label>
                    <input type="text" name4={this.state.value} onChange={this.handleChangeInputName4} 
                    /* ref={input => _name4 = input}*/ className="form-control mb-2 mr-sm-2" id="name4" placeholder="Seu nome, ScrumMaster!" />
                    <br />

                    <div className="center">
                    <Link to='/planningpokercards'>
                        <button type="submit" className="btn btn-primary center">Iniciar</button>
                        {/*<Link type="submit" to='/planningpoker' className="btn btn-primary center mb-2">Iniciar</Link>*/}
                    </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default PlanningPokerForm;







































/*import React, { Component } from 'react';

class PlanningPokerForm extends Component {
    
    constructor(){
        super();
        this.state = {
            gameName: '',
            gameDescription:'',
            typeOfCards:'',
            whocreate:'1'
        };
        
        this.handleInputChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        this.setState({
            gameName: event.target.value,
            gameDescription: event.target.value,
            typeOfCards: event.target.value,
            }
        );
      }
    
    handleSubmit(event){
        alert('Os dados foram submetidos: ' + this.state.gameName.value + ' ' + this.state.gameDescription.value + ' ' + this.state.typeOfCards.value + ' ' + this.state.whocreate.value + '.')
        clearForm();
    }
        


    clearForm = () => {
        {
            this.setState.gameName = '',
        }
        

    }

    render() {
        return (
            <div className="container">
            <h1>PlanningPokerForm</h1>
            <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" for="gamename1">Nome do jogo</label>
            <input type="text" onChange={this.handleInputChange} ref={input => _gameName1 = input} className="form-control mb-2 mr-sm-2" 
            id="gamename1" placeholder="Nome do jogo" />

            <label className="sr-only" for="description2">Descrição</label>
            <input type="text" ref={input => _gameDescription2 = input} className="form-control mb-2 mr-sm-2" 
            id="description2" placeholder="Descrição do Jogo" />

            <label className="sr-only" for="cardstype3">Tipo de Cartas</label>
            <select type="text" ref={input => _typeOfCards3 = input} className="form-control mb-2 mr-sm-2" 
            id="cardstype3" placeholder="Tipo de Cartas">
                <option value="scrum">Scrum (padrão)</option>
                <option selected value="fibonnaci">Fibonnaci</option>
                <option value="sequence">Sequencial</option>
                <option value="t-shirt">T-Shirt</option>
            </select>
            <button type="submit" className="btn btn-primary mb-2">Iniciar</button>
        </form>
        </div>
        )
    }
}

export default PlanningPokerForm;
*/