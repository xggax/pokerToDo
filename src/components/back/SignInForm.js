import React, { Component } from 'react';


class SignInForm extends Component {

    constructor(){
        super();
        this.authenticate = this.authenticate.bind(this)

    }

    componentDidMount(){

    }

    authenticate(e){
        e.preventDefault();
        console.log('authenticate');
        console.log(this.refs.email.value, '-', this.refs.password.value);
    }


    render() {

        return (
            <div className="container"> 
                <form className="form-signin" onSubmit={this.authenticate}>
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" ref="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                    <label for="inputPassword" ref="password" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© Poker-to-do-2018</p>
                </form>
            </div>
        )
    }
};

export default SignInForm;