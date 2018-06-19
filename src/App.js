import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './components/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import About from './components/About'
import PlanningPoker from './components/PlanningPoker'
import Kanban from './components/Kanban'
import Burndown from './components/Burndown'
import ErrorComponent from './components/ErrorComponent';
import Login from './components/Login';
import Logout from './components/Logout'
import PlanningPokerForm from './components/PlanningPokerForm';
import PlanningPokerCards from './components/PlanningPokerCards';
import { fire, base, auth} from './components/firebase/firebase';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Spinner } from '@blueprintjs/core';
import Apresentation from './components/Apresentation';


function AuthenticatedRoute({ Component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) => (authenticated === true)
        ? <Component {...props} {...rest} />
      : <Redirect to='/login' /> } />
  )
}

// {{ pathname: '/login', state: { from: props.location }} } /> } />

class App extends Component {



  constructor() {
    super();
    this.state = {
      authenticated: false,
      //currentUser: null,
      loading: true,
    }

  }

  /*
  setCurrentUser(user){
    if(user){
      this.setState({
        currentUser: user,
        authenticated: true
      })
    }else{
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }
  */


  componentWillMount() {
    this.removeAuthListener = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          //currentUser: user,
          authenticated: true,
          loading: false
        })
      } else {
        this.setState({
          //currentUser: null,
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

    if (this.state.loading === true) {
      return (
        <div style={{ textAlign: "center", position: "absolute", top: "50%", left: "25%" }}>
          <h3>Loading...</h3>
          {/*<Spinner />*/}<i className="fas fa-spinner fa-pulse"></i>
        </div>
      )
    }
    const logo = 'PokerToDo';
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <NavBar logo={logo} authenticated={this.state.authenticated} />
            <Switch>
              <AuthenticatedRoute
                exact path="/home"
                authenticated={this.state.authenticated}
                component={Home}
                />
              {/*<Route path="/" component={Apresentation} />*/}
              <Route path="/planningpoker" component={PlanningPoker} />
              <Route path="/kanban" component={Kanban} />
              <Route path="/burndown" component={Burndown} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/planningpokerform" component={PlanningPokerForm} />
              <Route path="/planningpokercards" component={PlanningPokerCards} />
              {/*<Route path='*' component={ErrorComponent} />*/}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
