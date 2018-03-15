import React, { Component } from 'react';

import Shots from './Shots';

import data from '../data/datasource';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      data
    };
  }

  filterShots = (filter) => {
    console.log(filter)
  }

  render() {
    return (
      <header>
        <nav className='nav'>
          <ul className='nav__list'>
            <li>
              <a href='#' onClick={ () => { this.filterShots('all') } }>All</a>
            </li>
            <li>
              <a href='#' onClick={ () => { this.filterShots('popular') } }>Popular</a>
            </li>
            <li>
              <a href='#' onClick={ () => { this.filterShots('recent') } }>Recent</a>
            </li>
            <li>
              <a href='#' onClick={ () => { this.filterShots('debut') } }>Debuts</a>
            </li>
          </ul>
        </nav>
        <Shots data={this.state.data}/>
      </header>
    );
  }
}

export default Container;
