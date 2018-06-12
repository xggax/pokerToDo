import React, { Component } from 'react';
import { base } from './firebase/firebase';

class UserStory extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.addTarefa = this.addTarefa.bind(this)
        this.state = {
            value: '...'
        }


    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    /*
    addTarefa(title){
        const tarefas = {...this.state.value};
        const id = Date.now();
        tarefas[id] = {
            id:id,
            title: title,


        }

        this.setState({ value: this.handleChange });
    }
    */

    /*
    componentWillMount(){
        this.valueRef = base.syncState('value', {
            context: this,
            state: 'value'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.valueRef);
    }
    */

    render() {
        return (
            <div className="">
                <div className="panel">
                    <h3>Entrada</h3>
                    <textarea
                        style={{ width: "100%", height: "100%" }}
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                </div>
                <div className="">
                    <h3>Saída</h3>
                    <div>{this.state.value}</div>
                </div>
            </div>
        )
    }
};

export default UserStory;
