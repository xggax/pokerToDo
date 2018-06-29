import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Participants extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="center">Players em jogo</h3>
                <br />
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Participantes 
                            <Popup trigger={<button> <i className="fas fa-plus-circle fa-sm"></i></button>} 
                             modal
                             closeOnDocumentClick>
                            <span> Modal content<br/>
                            Modal content<br/> 
                            Modal content<br/>
                            Modal content<br/>
                            Modal content<br/>
                            Modal content<br/>
                            Modal content<br/>
                            Modal content<br/>
                            Modal content<br/>
                            Modal content<br/></span>
                            </Popup>
                            </div><br />
                        <div className="panel-body">
                            <p>Membro1</p>
                            <p>Membro2</p>
                            <p>Membro3</p>
                            <p>Membro4</p>
                            <p>Membro5</p>
                            <p> * ícone de adicionar no topo abre uma janela modal com opção de enviar convite por email
                                com o link da sala criada, que no banco de dados vai ter o objeto "partida como os atríbutos dessa partida.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Participants;