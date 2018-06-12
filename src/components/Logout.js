import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { fire } from './firebase/firebase'
import { Spinner } from '@blueprintjs/core';

class Logout extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }


    componentWillMount() {
        fire.auth().signOut().then((user) => {
            this.setState({ redirect: true })
        })

    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }



        return (
            <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
                <h3>LogOut...</h3>
                {/*<Spinner/*/}>
            </div>
        )
    }
}

export default Logout;