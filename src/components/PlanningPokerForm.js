import React, { Component } from 'react';
import PlanningPokerCards from './PlanningPokerCards';
import { fire, auth, database } from './firebase/firebase';


class PlanningPokerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partida: [],
            gameName1: '',
            gameDescription2: '',
            typeOfCards3: '',
            //name4: '',
            pressionado: false,
            isScrumMaster: false
        };

        this.database = fire.database().ref().child('partidas');

        this.handleChangeInputGameName = this.handleChangeInputGameName.bind(this);
        this.handleChangeInputGameDescription = this.handleChangeInputGameDescription.bind(this);
        this.handleChangeSelectTypeOfCards3 = this.handleChangeSelectTypeOfCards3.bind(this);
        //this.handleChangeInputName4 = this.handleChangeInputName4.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(event) {
        event.preventDefault();
        const partidasRef = fire.database().ref('partidas');
        const partida = {
        gameName1: this.state.gameName1,
        gameDescription2: this.state.gameDescription2,
        typeOfCards3: this.state.typeOfCards3,
        //name4: this.state.name4,
        pressionado: '',
        isScrumMaster: ''
        }
        partidasRef.push(partida);
        this.setState({
            pressionado: '',
            isScrumMaster: ''
        })
        
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
        this.setState({
            gameName1: '',
            gameDescription2: '',
            typeOfCards3: '',
            //name4: ''

        })
    }

    render() {
        // O valor inicial do estado "pressionado" é nulo,
        // ou seja, o render está mostrando na tela o formulário.
        // Quando clicar no botão e submeter o form, a função "handleSubmit" será chamada,
        // essa função irá setar o estado "pressionado" para um valor diferente de nulo
        // o que fará com que seja renderizado a outra condição que é a sala de planning.
        if (this.state.pressionado === false) {
            return (
                <div className="container">
                    
                    <h1 class="center">Configuração da sala do Game</h1>
                    
                    <form onSubmit={this.handleSubmit} id="configForm">

                        <label className="sr-only" for="gameName1">Nome do Projeto</label>
                        <input type="text" value={this.state.gameName1} onChange={this.handleChangeInputGameName}
                         className="form-control mb-2 mr-sm-2" id="gameName1" placeholder="Nome do Projeto" /><br />

                        <label className="sr-only">Descrição do Projeto</label>
                        <input type="text" value={this.state.gameDescription2} onChange={this.handleChangeInputGameDescription}
                         className="form-control mb-2 mr-sm-2" id="gameDescription2" placeholder="Descrição do Projeto" /><br />

                        <label className="sr-only" for="typeOfCards3">Tipo de Cartas</label>
                        <select value={this.state.typeOfCards3} onChange={this.handleChangeSelectTypeOfCards3}
                            className="form-control mb-2 mr-sm-2" id="cardstype3">
                            <option selected value="fibonnaci">Fibonnaci</option>
                            {/*<option value="scrum">Scrum</option>
                            <option value="sequence">Sequencial</option>
                            <option value="t-shirt">T-Shirt</option>*/}
                        </select>
                        <br />
                        
                        {
                        /*
                        <label className="sr-only" for="name4">Nome</label>
                        <input type="text" value={this.state.name4} onChange={this.handleChangeInputName4}
                         className="form-control mb-2 mr-sm-2" id="name4" placeholder="Seu nome, ScrumMaster!" />
                        <br />
                        */
                        }

                        <div className="center">
                            <button type="submit" className="btn btn-primary center">Iniciar</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div><PlanningPokerCards 
                //nome={this.state.name4} 
                tipoCarta={this.state.typeOfCards3}
                descricao={this.state.gameDescription2}
                projetoNome={this.state.gameName1}
                isScrumMaster={this.state.isScrumMaster}
                />
                </div>
            )
        }

    }
}

export default PlanningPokerForm;