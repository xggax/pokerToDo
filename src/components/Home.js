import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

class Home extends Component {

    constructor(props){
        super(props)
        this.authenticated = props.authenticated;
    }

    homeCardPlanningPoker = {
        alt: 'Planning Poker',
        title: 'Planning Poker',
        text: 'Ferramenta de Estimativa',
        goto: 'Planning Poker',
        rota: '/planningpokerform',
        img: '{story_point}'
    }

    homeCardKanban = {
        alt: 'Kanban',
        title: 'Kanban',
        text: 'Acompanhe e organize seu Backlog',
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
                    <HomeCard {...this.homeCardPlanningPoker} />
                    <HomeCard {...this.homeCardKanban} />
                    {/*<HomeCard {...this.homeCardBurndown} />*/}
                </div>
            </div>
        );

    }
}

export default Home;