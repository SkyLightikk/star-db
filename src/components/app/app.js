import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    hasError: false
  };

  onToggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    this.setState( {
      selectedPerson: id
    })
  }

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
      <button className="btn btn-warning mb-md-3"
              onClick={this.onToggleRandomPlanet}>
                Toogle Random planet
      </button>
      <ErrorButton />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId = {this.state.selectedPerson}/>
        </div>
      </div>
    </div>
  );};
};