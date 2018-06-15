import React, { Component } from 'react';
import PlanningPokerForm from './PlanningPokerForm';
import PlanningPoker from './PlanningPoker'
import Participants from './Participants';
import UserStory from './UserStory';
import Tarefa from '../tarefa/Tarefa';
import TarefaForm from '../tarefaForm/TarefaForm';
import { fire, database } from './firebase/firebase';
import 'firebase/database';

class PlanningPokerCards extends Component {

    // Para poder cancelar uma votação o usuário precisa estar autenticado e ser o Scrum Master,
    // as variáveis "authenticated" e "scrumMaster" recebem valor ou null, para que seja usado an condição
    // de renderização do botão

    constructor(props) {
        super(props);

        this.database = fire.database().ref().child('tarefas');

        this.state = {
            tarefas: [],
            valueCard: null,
            cardVoted: null,
            authenticated: "s",
            scrumMaster: "s",
            cont0: 0,
            cont12: 0,
            cont1: 0,
            cont2: 0,
            cont3: 0,
            cont5: 0,
            cont8: 0,
            cont13: 0,
            cont20: 0,
            cont40: 0,
            cont99: 0,
        }

        //Bind das funções do form para submit e inputs
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        // bind do click de votar
        this.handleClick = this.handleClick.bind(this);

        // bind do clique de cancelar
        this.handleClick2 = this.handleClick2.bind(this);

        // bind de adicionar tarefa
        this.addTarefa = this.addTarefa.bind(this);

        // bind de remover tarefa
        this.removerTarefa = this.removerTarefa.bind(this);
    }

    componentWillMount() {
        const tarefaAnterior = this.state.tarefas

        //DataSnapshot
        this.database.on('child_added', snap => {
            tarefaAnterior.push({
                id: snap.key,
                tarefaContent: snap.val().tarefaContent,
            })

            this.setState({
                tarefas: tarefaAnterior
            })

        })

        this.database.on('child_removed', snap => {
            for (var i = 0; i < tarefaAnterior.length; i++) {
                if (tarefaAnterior[i].id === snap.key) {
                    tarefaAnterior.splice(i, 1);
                }
            }

            this.setState({
                tarefas: tarefaAnterior
            })
        })

    }

    addTarefa(tarefa) {
        this.database.push().set({
            tarefaContent: tarefa
        });
        // insere a tarefa dentro do array de tarefas
        /*   const tarefaAnterior = this.state.tarefas;
        tarefaAnterior.push({id: tarefaAnterior.length + 1, tarefaContent: tarefa});
        this.setState({
            tarefas: tarefaAnterior
        })*/
    }

    removerTarefa(tarefaId) {
        console.log("id: " + tarefaId);
        this.database.child(tarefaId).remove();

    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    handleChange(event) {
        this.setState({ valueCard: event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        alert('você votou!');
        this.state.cardVoted = this.state.valueCard;
        console.log(this.state.cardVoted);
        alert('Seu voto foi: ' + this.state.cardVoted);
        this.incrementVoted();
    }

    handleClick2(event) {
        event.preventDefault();
        alert('você cancelou a votação!');
    }

    incrementVoted = () => {
        switch (this.state.cardVoted) {
            case 0:
                this.setState({ cont0: this.state.cont0 + 1 })
                alert('quantidade de 0: ' + this.state.cont0);
                break;
            case '½':
                this.setState({ cont12: this.state.cont12 + 1 })
                alert('quantidade de 1/2: ' + this.state.cont12);
                break;
            case 1:
                this.setState({ cont1: this.state.cont1 + 1 })
                alert('quantidade de 1: ' + this.state.cont1);
                break;
            case 2:
                this.setState({ cont2: this.state.cont2 + 1 })
                alert('quantidade de 2:' + this.state.cont2);
                break;
            case 3:
                this.setState({ cont3: this.state.cont3 + 1 })
                alert('quantidade de 3: ' + this.state.cont3);
                break;
            case 5:
                this.setState({ cont5: this.state.cont5 + 1 })
                alert('quantidade de 5: ' + this.state.cont5);
                break;
            case 8:
                this.setState({ cont8: this.state.cont8 + 1 })
                alert('quantidade de 8: ' + this.state.cont8);
            case 13:
                this.setState({ cont13: this.state.cont13 + 1 })
                alert('quantidade de 13: ' + this.state.cont13);
                break;
            case 20:
                this.setState({ cont20: this.state.cont20 + 1 })
                alert('quantidade de 20: ' + this.state.cont20);
                break;
            case 40:
                this.setState({ cont40: this.state.cont40 + 1 })
                alert('quantidade de 40: ' + this.state.cont40);
                break;
            case 99:
                this.setState(prevState => {
                    return { cont99: prevState.cont99 + 1 }
                })
                alert('quantidade de 99: ' + this.state.cont99.value);
                console.log(this.state.cont99)
                break;
        }

    }


    render() {
        return (
            <div className="containner">

                {/*<br />
                <div >
                    <h1 className="center">Planning Poker</h1>
                </div>
                <br /><br />*/}
                <div className="row">
                    <div className="col-sm-6">
                        <br />
                        <h3 className="center">Poker</h3>
                        <br />
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">
                                                <span class="glyphicon glyphicon-bookmark"></span>Deck
                                            </h3>
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="0" value="0" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="1/2" value="1/2" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="1" value="1" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="2" value="2" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="3" value="3" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="5" value="5" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="8" value="8" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="13" value="13" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="20" value="20" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="40" value="40" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="99" value="99" /></div>
                                                <div class="col-sm-2"><input type="button" class="btn btn-default btn-lg  disabled" data-point="?" value="?" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        {/*
                        <div className="scrum-card">
                            <span>{this.state.valueCard}</span>
                        </div><br />
                        <form onSubmit={this.handleSubmit} className="center">
                            <label htmlFor="select-choice-a" className="select">Selecione o valor:</label>
                            <select value={this.state.valueCard} onChange={this.handleChange} name="valueCard" id="valueCard" data-native-menu="false">
                                <option defaultValue disabled  >selecione</option>
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
                        <br />*/}
                            {/*Caso seja ScrumMaster renderizar*/}

                            {this.state.authenticated && this.state.scrumMaster ?
                                (
                                    <div className="row">
                                        <div className="col-6 col-sm-6 right">
                                            <button onClick={this.handleClick2} className="btn btn-primary btn-sm">Iniciar Rodada</button><br /><br />
                                            <button onClick={this.handleClick2} className="btn btn-primary btn-sm">Cancelar Rodada</button>
                                        </div>
                                        <div className="col-6 col-sm-6 left">
                                            <button onClick={this.handleClick2} className="btn btn-primary btn-sm">Terminar Rodada</button><br /><br />
                                            <button onClick={this.handleClick2} className="btn btn-primary btn-sm">Finalizar Jogo</button>
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <button id="show_button" onClick={this.handleClick} className="btn btn-primary btn-sm">Votar</button>
                                    </div>
                                )
                            }
                      {/*  </form> */}
                    </div>
                    <div className="col-sm-4">
                        
                        <h3 className="center">Estórias</h3>
                        <h4 className="center">Em votação</h4>
                        <br/>
                        <h4 className="center">Lista de estórias</h4>
                            <div className="tarefasWrapper">
                            {/*<div className="tarefasHeader">
                                <div className="heading">Estórias</div>
                            </div>*/}
                            <div className="tarefasFooter">
                                <TarefaForm addTarefa={this.addTarefa} />
                            </div>
                            <div className="tarefasBody">
                                {
                                    this.state.tarefas.map((tarefas) => {
                                        return (
                                            <Tarefa tarefaContent={tarefas.tarefaContent}
                                                tarefaId={tarefas.id}
                                                key={tarefas.id}
                                                removerTarefa={this.removerTarefa} />
                                        )
                                    })
                                }
                            </div>
                            
                            <br/>
                        </div>
                        <h4 className="center">Estórias votadas</h4>
                        <br/>
                    </div>
                    <div className="col-sm-2">
                        <br />
                        <Participants />
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default PlanningPokerCards;