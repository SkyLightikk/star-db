import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details';


export default class App extends Component {

  render() {
    return (
      <div className="startdb-app">
        <Header />
        <RandomPlanet />
        <div className="footer d-flex">
        <ItemList />
        <PersonDetails />
        </div>
      </div>
    );
  }
}