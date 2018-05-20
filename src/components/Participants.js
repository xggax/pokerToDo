import React, { Component } from 'react';

class Participants extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="center">Players em jogo</h3>
                <br />
                <ul class="list-group">
                    <li class="list-group-item">Altrano </li>
                    <li class="list-group-item">Beltrano</li>
                    <li class="list-group-item">Ciclano</li>
                    <li class="list-group-item">Deltrano</li>
                    <li class="list-group-item">Eltrano</li>
                    <li class="list-group-item">Fulano</li>
                </ul>

            </div>
        )
    }

}

export default Participants;