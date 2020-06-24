import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'
import Row from '../row';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson : 3,
    hasError: false
  };

  onPersonSelected = (id) => {
    this.setState( {
      selectedPerson: id
    })
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    })
  }

  getNamePerson(person) {
    return `${person.name} birthday is ${person.birthYear}`
  };


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList 
      onItemSelected={this.onPersonSelected}
      getData={this.swapiService.getAllPeople}
      renderItem={this.getNamePerson}/>
    );

    const personDetails = (
      <PersonDetails personId = {this.state.selectedPerson}/>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  };
}