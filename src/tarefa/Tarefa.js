import React, { Component } from 'react';
import '../tarefa/Tarefa.css';
import propTypes from 'prop-types';

class Tarefa extends Component {
    constructor(props) {
        super(props);

        this.tarefaContent = props.tarefaContent;
        this.tarefaId = props.tarefaId;
        this.one = props.one;

        this.handleRemoveTarefa = this.handleRemoveTarefa.bind(this);

    }

    handleRemoveTarefa(id) {
        this.props.removerTarefa(id);
    }


    render(props) {
        if(this.one === true){
            return (
                <div className="tarefa-marcada fade-in">
                    <div className="closebtn" onClick={() => this.handleRemoveTarefa(this.tarefaId)}>
                        &times;
                    </div>
                    <p className="tarefaContent">{this.tarefaContent}</p>
                </div>
            )
        }else{
            return (
                <div className="tarefa-marcada fade-in">
                    <div className="closebtn" onClick={() => this.handleRemoveTarefa(this.tarefaId)}>
                        &times;
                    </div>
                    <p className="tarefaContent">{this.tarefaContent}</p>
                </div>
            )
        }
    }
}

Tarefa.propTypes = {
    tarefaContent: propTypes.string
}

export default Tarefa;