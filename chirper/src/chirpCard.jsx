import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class Chirp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="card border-dark mb-3">
                    <div class="card-header">{this.props.chirpSubject}</div>
                    <div class="card-body text-dark">
                        <h5 class="card-title">{this.props.authorName}</h5>
                        <p class="card-text">{this.props.textValue}</p>
                    </div>
                </div>
            </div>
        )
    }
}
