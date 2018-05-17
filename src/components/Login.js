import React, { Component } from 'react';
import login from '../images/login.png';
import firebase from 'firebase';
import App from '../App';


class Login extends Component {

    authenticated = 's';
    
    constructor(){
        super();
        //this.authenticate = this.authenticate.bind(this)
    }
    
    /*authenticate(e){
        e.preventDefault();
        console.log('authenticate');
        console.log(this.refs.email.value, '-', this.refs.password.value);
        
        this.auth().signInWithEmailAndPassword(email, password).then(
            signedUser => {
                this.state({
                    user: signedUser
                })
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, '-', errorMessage);
          });
    }
*/
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="container-fluid card-login">
                            <div className="card card-shadow">
                                <img className="card-img-top img-login align-self-center" src={login} alt="Firebase" />
                                <div className="card-body">
                                    <form onSubmit={this.authenticate}>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail1">Email</label>
                                            <input type="email" ref="email" className="form-control" id="inputEmail1" aria-describeby="emailHelp" placeholder="email" />
                                            <small id="emailHelp" className="form-text text-muted">Este email precisa já estar cadastrado</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputpassword">Senha</label>
                                            <input type="password" ref="password" className="form-control" id="inputPassword1" placeholder="senha" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                                        <small id="cardHelp" className="form-text text-muted text-center">@PokerToDo 2018</small>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
            /*<div className="container"> 
                    <form className="form-signin" onSubmit={this.authenticate}>
                        <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                        <label for="inputEmail" className="sr-only">Email</label>
                        <input type="email" ref="email" id="inputEmail" className="form-control" placeholder="Email" required="" autofocus="" />
                        <label for="inputPassword" ref="password" className="sr-only">Senha</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required="" />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Esqueceu sua senha?
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                        <br />
                        <h2  className="h3 mb-3 font-weight-normal">Cadastre-se</h2>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
                        <p className="mt-5 mb-3 text-muted">© Poker-to-do-2018</p>
                    </form>
                </div>*/
        )
    }
}

export default Login;