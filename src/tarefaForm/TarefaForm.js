import React, { Component } from 'react';
import '../tarefaForm/TarefaForm.css';

class TarefaForm extends Component {
    constructor(props){
    super(props);
    this.state = {
        novaTarefaContent: '',

    }; 

    this.handleUserInput = this.handleUserInput.bind(this);
    this.escrevaTarefa = this.escrevaTarefa.bind(this);

}

// Quando o usuário digita o input, seta o novo valor
// para o valor que é recebido da caixa de entrada.
handleUserInput(e){
    this.setState({
        novaTarefaContent: e.target.value, // o valor que vem do input
    })
}

escrevaTarefa(){
    //chama um método que seta o tarefaContent de uma tarefa
    // para o valor do Input

    this.props.addTarefa(this.state.novaTarefaContent);

    // Define o novaTarefaContent de volta para uma string vazia.
    this.setState({
        novaTarefaContent: '',
    })

}


    render() {
        return (
            <div className="formWrapper">
                <input className="tarefaInput"
                placeholder="Escreva uma nova tarefa..."
                value={this.state.novaTarefaContent}
                onChange={this.handleUserInput}
                />{' '}
                <button className="tarefaButton" onClick={this.escrevaTarefa}>Add Tarefa</button>
            </div>
        );
    }
}

export default TarefaForm;