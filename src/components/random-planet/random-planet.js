import React, { Component } from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component {
  render() {
    return(
      <div className="random-planet d-flex bg-dark">
        <img className="planet-img"
        src="https://clck.ru/P9yCr" alt="First Planet" />
        <div className="description">
          <h2>Naboo</h2>
          <ul className="details">
            <li>Population 4500000000000</li>
            <li>Rotation Period 26</li>
            <li>Diameter 12120</li>
          </ul>
        </div>
      </div>
    );
  }
}