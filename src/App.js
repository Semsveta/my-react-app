import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/main.scss'
import InputController from './components/inputControls/InputController';


class App extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <Route path="/" exact component={InputController} />
        </div>
      </div>
    );
  }
}

export default App;