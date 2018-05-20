import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Login from '../components/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const NavBar = (props) => (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <a className="navbar-brand" href="/">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {props.authenticated
                        ? (
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item">
                                <BrowserRouter>
                                    <Link className="nav-link" to="/planningpokerform">Planning Poker</Link>
                                </BrowserRouter>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/kanban">Kanban</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/burndown">Burndown</a>
                                </li>
                            </ul>
                        )
                        : null
                    }
                    {props.authenticated
                        ? (null)
                        : (
                            <div className="navbar-group">
                                <a className="btn btn-primary" href="/login">Registrar/Login</a>
                            </div>
                            
                        )
                    }
                </div>
            </nav><br />
    </div> 
        );
    
export default NavBar;