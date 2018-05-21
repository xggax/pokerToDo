import React, { Component } from 'react';
import login from '../images/login.png';
import App from '../App';
import { Redirect } from 'react-router-dom';
import { fire, googleProvider } from './firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
    //notify = () => toast("Wow so easy !");

    constructor(props) {
        super(props);
        this.authWithGoogle = this.authWithGoogle.bind(this);
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
        this.state = {
            redirect: false,
        }

    }

    authWithGoogle() {
        console.log("Autenticado com o google");
        fire.auth().signInWithPopup(googleProvider) /*.then(success => {}).catch(err => {})    Otimizar pra esse aqui depois*/
            .then((result, error) => {
                if (error) {
                    alert('Incapaz de conectar com o Google!')
                    /*toast.error('🦄 Incapaz de conectar com o Google!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });*/
                } else {
                    this.setState({ redirect: true })
                }
            })
    }

    authWithEmailPassword(event) {
        event.preventDefault();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        
        fire.auth().fetchProvidersForEmail(email)
            .then((googleProvider) => {
            if(googleProvider.length === 0){
                // create user
                return fire.auth().createUserWithEmailAndPassword(email, password)
            } else if (googleProvider.indexOf("password") === -1){
                // Usaram o Google
                this.loginForm.reset();
                alert('Tente outra forma de login');
                /* toast.warn('🦄 tente outra forma de login!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
                */
            }else{
                // Usuário está logado
                return fire.auth().signInWithEmailAndPassword(email, password)
            }
        })
        .then((user) => {
            
            if(user && user.email) {
                this.loginForm.reset()
                this.setState({redirect: true})
            }
        })
        .catch((error) => {
               alert('incapaz de conectar com o Google!')
                /* toast.error('🦄 Incapaz de conectar com o Google!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                */ 
        })
    }


    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="container-fluid card-login">
                            <div className="card card-shadow">
                                <img className="card-img-top img-login align-self-center" style={{ width: '200px', height: '200px' }} src={login} alt="Firebase" />
                                <div className="card-body">
                                    {/*<ToastContainer ref={(element) => { this.toastContainer = element }} />*/}
                                    <button type="submit" onClick={() => { this.authWithGoogle() }} className="btn btn-primary btn-block">Login com Google</button>
                                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                                    <div style={{ marginBottom: "10px" }} className="">
                                        <h5>Nota</h5>
                                        Caso não possua uma conta, este formulário irá criar sua conta.
                                    </div>
                                    <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Email</label>
                                            <input type="email" ref={(input) => { this.emailInput = input }} className="form-control" id="inputEmail" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword">Senha</label>
                                            <input type="password" ref={(input) => { this.passwordInput = input }} className="form-control" id="inputPassword" placeholder="Senha" />
                                        </div>
                                        <button type="submit" value="Log In" className="btn btn-primary btn-block">Login</button>
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
        )
    }
}

export default Login;