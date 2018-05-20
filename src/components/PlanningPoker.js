import React, { Component } from 'react';
import PlanningPokerForm from './PlanningPokerForm';
import PlanningPokerCards from './PlanningPokerCards';
import Participants from './Participants';

class PlanningPoker extends Component {

    islogged = true;
    isScrumMaster = true;

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"><PlanningPokerForm islogged={this.islogged} isScrumMaster={this.isScrumMaster} /></div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row"></div>
            </div>
        );
    }
}

export default PlanningPoker;