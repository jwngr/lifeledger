import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  getImageKey, getSecondsFromTime, getNumberWithCommas, getFormattedTimeFromSeconds,
} from './utils';

import runs from './resources/runs.json';
import months from './resources/months.json';

import './MonthLedger.css';

class MonthLedger extends Component {
  render() {
    const stats = {
      runs: 0,
      distance: 0,
      time: 0,
      calories: 0,
    };

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

        stats.runs += 1;
        stats.distance += run.distance;
        stats.time += getSecondsFromTime(run.time);
        stats.calories += run.calories;
      }
    });

    return (
      <div>
        <p className="monthName">{months[this.props.month]}</p>
        <div className="monthStats">
          <p>{stats.runs} runs</p>
          <p className="separator">|</p>
          <p>{parseFloat(stats.distance).toFixed(2)} miles</p>
          <p className="separator">|</p>
          <p>{getFormattedTimeFromSeconds(stats.time)} hours</p>
          <p className="separator">|</p>
          <p>{getNumberWithCommas(stats.calories)} calories</p>
        </div>
        <div className="imagesContainer">
          {images}
        </div>
      </div>
    );
  }
}

export default MonthLedger;
