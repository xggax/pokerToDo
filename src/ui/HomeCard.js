import React, { Component } from 'react';
import story_point from '../images/story_point.png'
import kanban from '../images/kanban.png'
import burndown_chart from '../images/burndown_chart.png'
import { Link, BrowserRouter } from 'react-router-dom'

const HomeCard = (props) => (

    <div className="col-12 col-sm-6">
        <div className="card" >
            <img className="card-img-top rounded mx-auto d-block" style={{ paddingTop: '3px', width: '100px', height: '100px' }} src={kanban} alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link className="btn btn-primary" to={props.rota}>{props.goto}</Link>
            </div>
        </div>
    </div>
);

export default HomeCard;