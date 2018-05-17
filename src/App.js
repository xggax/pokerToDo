import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About'
import PlanningPoker from './components/PlanningPoker'
import Kanban from './components/Kanban'
import Burndown from './components/Burndown'
import ErrorComponent from './components/ErrorComponent';
//import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login';
import PlanningPokerForm from './components/PlanningPokerForm';

class App extends Component {

  constructor() {
    super();
    this.authenticated = '';
  }

  render() {
    const logo = 'PokerToDo';
    return (
      <div className="container-fluid">
        <NavBar logo={logo} authenticated={this.authenticated} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/planningpoker" component={PlanningPoker} />
            <Route path="/kanban" component={Kanban} />
            <Route path="/burndown" component={Burndown} />
            <Route path="/login" component={Login} />
            <Route path="/plannningpokerform" component={PlanningPokerForm} />
            <Route path='*' component={ErrorComponent} />
          </Switch>
        </BrowserRouter>
        {/*<Router> 
          <Fragment> 
            <Route exact path="/" component={Home} /> 
            <Route path="/planningpoker" component={PlanningPoker} />
            <Route path="/kanban" component={Kanban} /> 
            <Route path="/burndown" component={Burndown} /> 
          </Fragment> 
        </Router>*/}
      </div>
    );
  }
}

export default App;
