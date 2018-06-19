import React, { Component } from 'react';
import './App.css';

let ChirpPost = (props) => (
    <div>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">New Chirp</div>
                <div className="card-body text-dark">
                    <p className="card-text">{props.formValue}</p>
                </div>
            </div>
        </div>
    </div>
)

export default ChirpPost;