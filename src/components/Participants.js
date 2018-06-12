import React, { Component } from 'react';

class Participants extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="center">Players em jogo</h3>
                <br />
                <ul className="list-group">
                    <li className="list-group-item">Altrano </li>
                    <li className="list-group-item">Beltrano</li>
                    <li className="list-group-item">Ciclano</li>
                    <li className="list-group-item">Deltrano</li>
                    <li className="list-group-item">Eltrano</li>
                    <li className="list-group-item">Fulano</li>
                </ul>

            </div>
        )
    }

}

export default Participants;