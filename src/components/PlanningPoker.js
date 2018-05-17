import React, { Component } from 'react';
import PlanningPokerForm from './PlanningPokerForm';
import PlanningPokerCards from './PlanningPokerCards';
import Participants from './Participants';

class PlanningPoker extends Component {

    render() {
        this.tempselect = 'sequence';
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"><PlanningPokerForm /></div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"><PlanningPokerCards tempselect={this.tempselect}/></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">< Participants /></div>
                </div>
                <div className="row"></div>
            </div>
        );
    }
}

export default PlanningPoker;