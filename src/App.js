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
import Login from './components/Login';
import Logout from './components/Logout'
import PlanningPokerForm from './components/PlanningPokerForm';
import PlanningPokerCards from './components/PlanningPokerCards';
import { fire, base } from './components/firebase/firebase';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class App extends Component {

  

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    }
    
  }

  componentDidMount() {

  }

  componentWillMount() {
    this.removeAuthListener = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false
        })
      }
    })

  }

  componentWillUnmount() {
    this.removeAuthListener();
  }


  render() {
    if(this.state.loading === true){
      return (
        <div style={{textAlign: "center", position: "absolute", top: "25%", left: "50%"}}>
            <h3>Loading...</h3>
        </div>
      )
    }
    const logo = 'PokerToDo';
    return (
      <div className="container-fluid">
        <NavBar logo={logo} authenticated={this.state.authenticated} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/planningpoker" component={PlanningPoker} />
            <Route path="/kanban" component={Kanban} />
            <Route path="/burndown" component={Burndown} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/plannningpokerform" component={PlanningPokerForm} />
            <Route path="/planningpokercards" component={PlanningPokerCards} />
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
