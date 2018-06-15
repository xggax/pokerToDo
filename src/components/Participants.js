import React, { Component } from 'react';

class Participants extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="center">Players em jogo</h3>
                <br />
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">Membros</div>
                        <div class="panel-body">
                        <p>Membro1</p>                        
                        <p>Membro2</p>
                        <p>Membro3</p>
                        <p>Membro4</p>
                        <p>Membro5</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Participants;