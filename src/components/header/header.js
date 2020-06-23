import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <h3>Star DB</h3>
        <ul className="menu d-flex">
          {/* eslint-disable-next-line */}
          <li><a href="#">People</a></li>
          {/* eslint-disable-next-line */}
          <li><a href="#">Planets</a></li>
          {/* eslint-disable-next-line */}
          <li><a href="#">Starships</a></li>
        </ul>
      </div>
    );
  }

}