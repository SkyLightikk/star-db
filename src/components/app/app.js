import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context';

import Row from "../row/row";


import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? 
                      DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  }

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange} />
          {planet}

          <Row 
            left={<PersonList/>}
            right={<PersonDetails itemId={11} />}/>

          <Row 
            left={  <PlanetList/> }
            right={<PlanetDetails itemId={9} />}/>

          <Row 
            left={ <StarshipList/>}
            right={<StarshipDetails itemId={15} />}/>
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
