import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <React.Fragment>
            <form>
                <div class="form-group">
                    <div class="col">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div class="col">
                        <input type="text" placeholder="Your Name" />
                    </div>
                </div>
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </form>
        </React.Fragment >
            }
}