import React from 'react';
import ErrorButton from '../error-button/error-button';
import './item-details.css';

const Record = ({ data, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ data[field] }</span>
    </li>
  );
};

export {
  Record
};


const ItemDetails = (props) => {

    const { data, imageUrl } = props;
    if (!data) {
      return <span>Select a item from a list</span>;
    }

    const { name } = data;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={imageUrl}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(props.children, (child) => {
                return React.cloneElement(child, { data });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
}

export default ItemDetails;
