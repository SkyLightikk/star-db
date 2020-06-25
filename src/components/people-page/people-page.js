import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'
import Row from '../row';
import './people-page.css';

class ErrorBoundry extends Component {

  state={
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}



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
      <ErrorBoundry>
        <PersonDetails personId = {this.state.selectedPerson}/>
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  };
}