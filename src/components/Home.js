import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

class Home extends Component {

    homeCardPlanningPoker = {
        alt: 'Planning Poker',
        title: 'Planning Poker',
        text: 'Texto aqui desse card mirabolante e insano!',
        goto: 'Planning Poker',
        rota: '/planningpokerform',
        img: '{story_point}'
    }

    homeCardKanban = {
        alt: 'Kanban',
        title: 'Kanban',
        text: 'Texto aqui desse card mirabolante e insano!',
        goto: 'Kanban',
        rota: '/kanban',
        img: '{kanban}'
    }

    homeCardBurndown = {
        alt: 'Burndown Chart',
        title: 'Burndown Chart',
        text: 'Texto aqui desse card mirabolante e insano!',
        goto: 'Burndown Chart',
        rota: '/burndown',
        img: '{burndown_chart}'

    }


    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    {this.props.authenticated}
                    <HomeCard {...this.homeCardPlanningPoker} />
                    <HomeCard {...this.homeCardKanban} />
                    <HomeCard {...this.homeCardBurndown} />
                </div>
            </div>
        );

    }
}

export default Home;