import React, { Component } from 'react';
import Participants from './Participants';
import Tarefa from '../tarefa/Tarefa';
import TarefaForm from '../tarefaForm/TarefaForm';
import { fire, database } from './firebase/firebase';
import 'firebase/database';
import propTypes from 'prop-types';

class PlanningPokerCards extends Component {

    // Para poder cancelar uma votação o usuário precisa estar autenticado e ser o Scrum Master,
    // as variáveis "authenticated" e "scrumMaster" recebem valor ou null, para que seja usado an condição
    // de renderização do botão

    constructor(props) {
        super(props);

        //this.nome = props.nome;
        this.descricao = props.descricao;
        this.tipoCarta = props.tipoCarta;
        this.projetoNome = props.projetoNome;
        this.isScrumMaster = props.isScrumMaster;

        this.database = fire.database().ref().child('tarefas');

        this.state = {
            tarefas: [],
            valueCard: null,
            cardVoted: null,
            authenticated: "s",
            user: null,
            foto: null,
            email: null,
            one: true,
            choice: 'X'
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
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                const displayName = user.displayName;
                const email = user.email;
                const emailVerified = user.emailVerified;
                const photoURL = user.photoURL;
                const isAnonymous = user.isAnonymous;
                const uid = user.uid;
                const providerData = user.providerData;

                this.setState({
                    user: displayName,
                    foto: photoURL,
                    email: email
                });
            } else {
                // User is signed out.
                // ...
            }
        });

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
    }

    handleClick2(event) {
        event.preventDefault();
        alert('você cancelou a votação!');
    }




    render(props) {
        return (
            <div className="containner">
                <div>
                    {this.state.foto ? (<div>
                    <img src={this.state.foto} width="50" height="50" alt="foto perfil" />
                    <p>Bem-vindo {this.state.user} :)</p></div>)
                    : (null)
                    }
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <br />
                        <h3 className="center">Poker</h3>
                        <br />
                        <h5 className="center">Board de votação ativo</h5>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Painel de Votação {this.projetoNome}</h3>
                                    <h5>{this.descricao}</h5>
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <p>Cartas viradas representando cada membro devem estar aqui viradas</p>
                                            <p>A quantidade de cartas deve ser renderizada incrementalmente igual a quantidade de membros</p>
                                            <p>Ao finalizar a rodada as cartas devem ter seus estados trocados<br />
                                                para os estados atuais de valores da votação de cada membro para a estória
                                        </p>
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    { this.state.user && this.isScrumMaster ? (
                                                        <div>teste</div>
                                                    )

                                                    :(
                                                        <input type="button" className="btn btn-outline-secondary" data-point="0" value={this.state.choice} />
                                                        
                                                    )
                                                        
                                                    }
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">
                                                <span className="glyphicon glyphicon-bookmark"></span>Deck
                                            </h3>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row">

                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="0" value="0" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="1/2" value="1/2" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="1" value="1" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="2" value="2" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="3" value="3" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="5" value="5" /></div>


                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="8" value="8" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="13" value="13" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="20" value="20" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="40" value="40" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="99" value="99" /></div>
                                                <div className="col-sm-2"><input type="button" className="btn btn-outline-secondary" data-point="?" value="?" /></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            {/*BOTÕES E CONDIÇÕES SE É SCRUM MASTER OU APENAS MEMBRO*/}

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
                        </div>

                        {/*ESTÓRIA MAIS PONTUADA E ESTÓRIA MENOS PONTUADA*/}
                        <br />
                        <div className="container">
                            <h3>Estórias Mais e Menos</h3>
                            <p>Aqui em baixo ficam as estórias já votadas que possuem mmaior e menor pontuação, respectivamente.</p>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Estória Maior Pontuação</div>
                                    <div className="panel-body">Estória+++++++++++++++++++++</div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">Estória Menor Pontuação</div>
                                    <div className="panel-body">Estória----------------------------</div>
                                </div>
                            </div>
                        </div>

                        {/*ESTÓRIAS*/}

                    </div>
                    <div className="col-sm-4">
                        <br />
                        <h3 className="center">Estórias</h3>
                        <br />
                        <h4 className="center">Em votação</h4>
                        <p className="center">Ao iniciar a rodada a estória do topo da fila deve subir pra cá</p>
                        <p className="center">Esse item deve ficar destacado de alguma forma pra facilitar a compreensão</p>
                        <hr />
                        <br />
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
                                        if (this.state.tarefas[0] && this.state.tarefas !== null) {
                                            return (

                                                <Tarefa tarefaContent={tarefas.tarefaContent}
                                                    tarefaId={tarefas.id}
                                                    key={tarefas.id}
                                                    removerTarefa={this.removerTarefa}
                                                    pos={this.state.one}
                                                />

                                            )
                                        } else {
                                            return (

                                                <Tarefa tarefaContent={tarefas.tarefaContent}
                                                    tarefaId={tarefas.id}
                                                    key={tarefas.id}
                                                    removerTarefa={this.removerTarefa}
                                                    pos={!(this.state.one)}
                                                />

                                            )
                                        }
                                    })
                                }
                            </div>

                            <br />
                            <hr />
                        </div>
                        <h4 className="center">Estórias votadas</h4>
                        <p className="center">A estória, ao terminar a votação, deve vir pra cá</p>
                        <br />
                    </div>
                    <div className="col-sm-2">
                        <br />
                        {/*Aqui vai entrar um array de participante, cada participante vai ser renderizado usando map, que nem em tarefas*/}
                        <Participants />
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

PlanningPokerCards.propTypes = {
    nome: propTypes.string,
    tipoCarta: propTypes.string,
    projetoNome: propTypes.string,
    descricao: propTypes.string

}

export default PlanningPokerCards;