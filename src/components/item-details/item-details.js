import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';


const Record = ({field, label, item}) => {
  return (
    <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
          </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  
  updateItem() {
    this.setState({loading: true});
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item,
          loading: false,
          image: getImageUrl(item)  
        });
      });
  };

  render() {

    const { item, image } = this.state;

    if (!item) {
      return <span>Выберите ??? из списка</span>
    };
    const spinner = this.state.loading ? <Spinner /> : null;
    const content = !spinner ? <ItemView item={item} image={image} children={this.props.children}/> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const ItemView = ({item, image, children}) => {

  const { name, gender, birthYear,eyeColor } = item;
    return(
      <React.Fragment>
         <img className="item-image"
          src={image} alt={name} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, child => {
                return React.cloneElement(child, {item});
              })
            }
              <ErrorButton />
          </ul>
        </div>
      </React.Fragment>
    );
}
