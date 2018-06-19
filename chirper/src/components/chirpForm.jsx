import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chirp from './chirpCard';

export default class ChirpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        handleChirpChange = e => {
            this.setState({
                newChirpValue: e.target.value
            });
        }

        chirp = () => {
            this.props.addChirp({ text: this.state.newChirpValue});
            this.setState({
                newChirpValue: '',
            });
        }
    }

    render() {
        return (
            <div className="chirpFormInput">
            <label>
                Chirp: 
                <input type="text" value={this.state.newChirpValue} onChange={this.handleChirpChange} />
            </label>
            <button type="button" onClick={this.chirp} className="btn btn-info">Post</button>
            </div>
        )}



    //     <React.Fragment>
    //         <form>
    //             <div className="form-group">
    //                 <div className="col chirpSubject">
    //                     <input type="text" placeholder="Subject" />
    //                 </div>
    //                 <div className="col chirpAuthor">
    //                     <input type="text" placeholder="Your Name" />
    //                 </div>
    //             </div>
    //             <div className="chirpText">
    //                 <label for="chirpText">Example textarea</label>
    //                 <textarea className="form-control" rows="3"></textarea>
    //             </div>
    //         </form>
    //         <button type="button" onClick={} className="btn btn-info">Post</button>

    //     </React.Fragment>
    // }
}

// app
//     state: chirps[]
//     addCard(string)
//     render(
//         <cardContainer chirps={this.state.chirps} />
//         <chirpForm addCard={(string) => this.addCard(string)} />
//     )

//     cardContiainer
//     return (
//         forEach string in this.props.chirps
//             <card string={string} />
//     )