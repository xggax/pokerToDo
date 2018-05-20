import React, { Component } from 'react';
import PlanningPokerForm from './PlanningPokerForm';
import PlanningPoker from './PlanningPoker'
import Participants from './Participants';

class PlanningPokerCards extends Component{
   
    // Para poder cancelar uma votação o usuário precisa estar autenticado e ser o Scrum Master,
    // as variáveis "authenticated" e "scrumMaster" recebem valor ou null, para que seja usado an condição
    // de renderização do botão

    authenticated = "s";
    scrumMaster = "s";

    constructor(props){
        super(props);
        this.state = {
            valueCard: 0,
            cardVoted:''
        }
        //Bind das funções do form para submit e inputs
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);

        // bind do click de votar
            this.handleClick = this.handleClick.bind(this);
        
        // bind do clique de cancelar
        this.handleClick2 = this.handleClick2.bind(this);
    }


    componentDidMount(){
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }
    
    handleChange(event){
        this.setState({valueCard: event.target.value});
    }
    
    handleClick (event) {
       event.preventDefault();
       alert('você votou!');
       this.state.cardVoted = this.state.valueCard;
       console.log(this.state.cardVoted);
       alert('Seu voto foi: ' + this.state.cardVoted);
    }

    handleClick2 (event) {
        event.preventDefault();
        alert('você cancelou a votação!');
     }

    
    render(){
    return (
        <div className="containner">
            <br />
            <div >
                <h1 className="center">Planning Poker</h1>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-sm-4">
                    <h3 className="center">Game</h3>
                    <br />
                    <div class="scrum-card">
                        <span>{this.state.valueCard}</span>
                    </div><br />
                    <form onSubmit={this.handleSubmit} className="center">
                    <label for="select-choice-a" className="select">Selecione o valor:</label>
                    <select value={this.state.valueCard} onChange={this.handleChange} name="valueCard" id="valueCard" data-native-menu="false">
                        <option selected disabled  >selecione</option>
                        <option value="0">0</option>
                        <option value="½">½</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="8">8</option>
                        <option value="13">13</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="99">99</option>
                    </select>
                    <br/>
                    <row>
                    <button onClick={this.handleClick} className="btn btn-primary btn-sm">Votar</button>{' '}
                    
                    {/*Condicional para aparecer o botão de cancelar a votação caso seja scrum master*/}
                    
                    {this.authenticated && this.scrumMaster ?
                    (<button onClick={this.handleClick2} className="btn btn-primary btn-sm">Cancelar</button> ) : null
                    }
                    </row>
                    </form>
                </div>
                <div className="col-sm-6">UserStory</div>  
                <div className="col-sm-2"><Participants/></div>
                <br/>
            </div>
        </div>
    )}
}

export default PlanningPokerCards;