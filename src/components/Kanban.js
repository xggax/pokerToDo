import React, { Component } from 'react';
import KanbanForm from './KanbanForm';

class Kanban extends Component {
    constructor() {
        super();
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.state = {
            kanban: [
                {
                    id: '1',
                    title: 'Doit1',
                    dateBegin: '09/05/2017',
                    dateEnd: '09/05/2017',
                    description: 'Descrição de uma atividade mais insana que você vai ver hoje!'
                },
                {
                    id: '2',
                    title: 'Doit2',
                    dateBegin: '09/05/2018',
                    dateEnd: '09/05/2018',
                    description: 'Descrição de uma atividade mais insana que você vai ver hoje!'
                },
                {
                    id: '3',
                    title: 'Doit3',
                    dateBegin: '09/05/2019',
                    dateEnd: '09/05/2019',
                    description: 'Descrição de uma atividade mais insana que você vai ver hoje!'
                },
                {
                    id: '4',
                    title: 'Doit4',
                    dateBegin: '09/05/2020',
                    dateEnd: '09/05/2020',
                    description: 'Descrição de uma atividade mais insana que você vai ver hoje!'
                }
            ]

        }
    }


    handlerSubmit(e, {title, dateBegin, dateEnd, description}){
        e.preventDefault();
        var state = this.state;
        var myKanban = {
            id: state.kanban.length + 1,
            title: title,
            dateBegin: dateBegin,
            dateEnd: dateEnd,
            description: description 
        }
        this.setState({kanban: state.kanban.concat(myKanban)})
    }

    render() {
        return (
            <div className="container-fluid">
               <KanbanForm submitHandler={this.handlerSubmit} />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Título</th>
                        <th scope="col">Data Início</th>
                        <th scope="col">Data Fim</th>
                        <th scope="col">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.kanban.map( (kanban, index) => {
                        return (
                            <tr key={kanban.id}>
                            <th scope="row">{kanban.id}</th>
                            <td>{kanban.title}</td>
                            <td>{kanban.dateBegin}</td>
                            <td>{kanban.dateEnd}</td>
                            <td>{kanban.description}</td>
                            <td><button type="button" className="btn btn-danger btn-sm">Remover</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        );
    }
}

export default Kanban;