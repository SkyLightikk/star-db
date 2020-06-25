import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
import Row from '../row';

export default class App extends Component {

  swapiService = new SwapiService();

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

  getNamePlanet(planet) {
    return (
      <span>{`${planet.name} population is ${planet.population}`}
        <button>!</button>
      </span>

    );
  };

  getNameStarship(starship) {
    return `${starship.name}`
  };

  render() {

    if ( this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/> :
    null;

    const {getPerson, getStarship, getPersonImage,
          getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11} 
        getData={getPerson}
        getImageUrl={getPersonImage} />
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    );

  return (
    <div>
      <Header />
      {/* {planet} */}
      {/* <button className="btn btn-warning mb-md-3 mr-2"
              onClick={this.onToggleRandomPlanet}>
                Toogle Random planet
      </button>
      <ErrorButton />
      <PeoplePage /> */}
      <Row 
        left={personDetails}
        right={starshipDetails} />

      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={this.getNamePlanet}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails itemId = {this.state.selectedPerson}/>
        </div>
      </div> */}

      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={this.getNameStarship}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails itemId = {this.state.selectedPerson}/>
        </div>
      </div> */}

    </div>
  );};
};