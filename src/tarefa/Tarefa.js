import React, { Component } from 'react';
import '../tarefa/Tarefa.css';
import propTypes from 'prop-types';
import PlanningPokerCards from '../components/PlanningPokerCards'

class Tarefa extends Component {
    constructor(props) {
        super(props);

        this.tarefaContent = props.tarefaContent;
        this.tarefaId = props.tarefaId;

        this.handleRemoveTarefa = this.handleRemoveTarefa.bind(this);

    }

    handleRemoveTarefa(id) {
        this.props.removerTarefa(id);
    }


    render(props) {
        return (
            <div className="tarefa fade-in">
                <span className="closebtn" onClick={() => this.handleRemoveTarefa(this.tarefaId)}>
                    &times;
                </span>
                <p className="tarefaContent">{this.tarefaContent}</p>
            </div>
        );
    }
}

Tarefa.propTypes = {
    tarefaContent: propTypes.string
}

export default Tarefa;