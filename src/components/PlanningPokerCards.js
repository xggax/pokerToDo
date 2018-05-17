import React, { Component } from 'react';
import PlanningPokerForm from './PlanningPokerForm';

class PlanningPokerCards extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            valueCard: ''

        }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    
    handleChange(event){
        this.setState({valueCard: event.target.value});
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
                <div className="col-sm-4"></div>
                <div className="col-sm-6">
                    <h3 className="center">Game</h3>
                    <br />
                    <div class="scrum-card">
                        <span>{this.state.valueCard}</span>
                    </div><br />
                    <form onSubmit={this.handleSubmit}>
                    <label for="select-choice-a" className="select">Selecione o valor:</label>
                    <select valueCard={this.state.value} onChange={this.handleChange} name="select-choice-a" id="select-choice-a" data-native-menu="false">
                        <option disabled selected >selecione</option>
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
                    </form>
                </div>  
                <div className="col-sm-2"></div>
                <br/>
            </div>
        </div>
    )}
}

export default PlanningPokerCards;