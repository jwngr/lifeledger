import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {getImageKey} from './utils';

import runs from './resources/runs.json';
import months from './resources/months.json';

import './MonthLedger.css';

class MonthLedger extends Component {
  render() {
    const images = [];
    runs.forEach(run => {
      const {day, month, year} = run;
      if (month === this.props.month) {
        const key = getImageKey(day, month, year);

        images.push(
          <Link to={key} key={key}>
            <img
              alt={key}
              src={require(`./images/runs/${key}.jpg`)}
              onClick={this.props.openModal.bind(null, run)} />
          </Link>
        );
      }
    });

    return (
      <div className="month-ledger">
        <p className="month">{months[this.props.month]}</p>

        <div className="imagesContainer">
          {images}
        </div>
      </div>
    );
  }
}

export default MonthLedger;
