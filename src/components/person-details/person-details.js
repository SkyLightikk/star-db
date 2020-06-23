import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details bg-dark d-flex">
          <img src="https://clck.ru/P9zf4" alt="Person Detail Img" />
          <div className="description">
            <h4>R2-D2</h4>
            <ul className="details">
              <li>Gender: n/a</li>
              <li>Birth year: 33BBY</li>
              <li>EYE color: red</li>
            </ul>
          </div>
      </div>
    );
  }
}
