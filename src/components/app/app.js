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

export default class App extends Component {

  swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true
  };

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
        <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />

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
