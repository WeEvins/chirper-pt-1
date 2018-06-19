import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChirpPost from './components/chirpCard';
import ChirpForm from './components/chirpForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          text: 'default card 1'
        },
        {
          text: 'default card 2'
        },
        {
          text: 'default card 3'
        }
      ],
    }
  }


  
  addChirp = (newChirpValue) => {
    this.setState({
      posts: [newChirpValue, ...this.state.posts]
    });
  }

  render() {
    return (
      <div>
        <chirpCard addChirp={this.addChirp} />
        <div className="chirpContainer">
          <div className="row">
            {
              this.state.posts.map((formValue, index) => {
                return (
                  <ChirpPost key={index} formValue={formValue.text} />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
