import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import Row from "../row/row";
import DummySwapiService from '../../services/dummy-swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './app.css';
import SwapiService from '../../services/swapi-service';

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

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

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

          <Row left ={
            <div>
              <PersonList/>
              <PlanetList/>
              <StarshipList/>
            </div>

                }
                right={
                  <div>
                  <PersonDetails itemId={11} />
                  <PlanetDetails itemId={9} />
                  <StarshipDetails itemId={15} />
                  </div>
                }>
          </Row>      
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
