import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
    <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {props.authenticated === true
                    ? (<div><Link className="navbar-brand" to="/home">{props.logo}</Link></div>)
                    : (<div><Link className="navbar-brand" to="/">{props.logo}</Link></div>)
        }
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {props.authenticated
                    ? (

                        <div>
                            <ul className="navbar-nav mr-auto">
                               { /*className="btn btn-secondary  mr-sm-2"*/}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/planningpokerform">Planning Poker</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/kanban">Kanban</Link>
                                </li>
                                {/*<li className="nav-item">
                                    <Link className="nav-link" to="/burndown">Burndown</Link>
                                </li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile" title="Perfil"><i className="fas fa-user fa-sm"></i></Link>
                                </li>
                                {/*<li className="nav-item">
                                    <Link  className="nav-link" to="/settings" title="Settings"><i className="fas fa-cogs fa-sm"></i></Link>
                            </li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link"  to="/logout" title="logout"><i className="fas fa-sign-out-alt fa-sm"></i></Link>
                                </li>
                                
                            </ul>

                        </div>
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