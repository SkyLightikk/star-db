import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  onToggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    console.log('componentDidCatch() ');
    this.setState({hasError: true});
  } 

  render() {

    if ( this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/> :
    null;

  return (
    <div>
      <Header />
      {planet}
      <button className="btn btn-warning mb-md-3 mr-2"
              onClick={this.onToggleRandomPlanet}>
                Toogle Random planet
      </button>
      <ErrorButton />
      <PeoplePage />
      <PeoplePage />  
      <PeoplePage />  
    </div>
  );};
};