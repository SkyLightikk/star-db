import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        {/* eslint-disable-next-line */}
        <a href="#">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">People</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Planets</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;