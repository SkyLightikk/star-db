import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from '../error-button';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null
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

  render() {

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