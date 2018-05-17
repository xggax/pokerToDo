import React, { Component } from 'react';

const ErrorComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div className="error-details">
                        <p>Desculpe, um erro ocorreu, e a página não foi encontrada!</p>
                </div>
                    <div className="error-actions">
                        <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Home</a>
                        <a href="/" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span>Contato</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default ErrorComponent;