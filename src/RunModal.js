import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import {getImageKey, getFormattedTime} from './utils';

import months from './resources/months.json';

import Modal from 'react-modal';

import './RunModal.css';


class RunModal extends Component {
  render() {
    const {isOpen, runInfo, onRequestClose} = this.props;

    let modalContent;
    if (runInfo) {
      const {day, month, year, startTime, distance, time, pace, calories} = runInfo;
      const key = getImageKey(day, month, year);
      modalContent = (
        <div className="modalContent">
          <div>
            <img
              className="runImage"
              alt={key}
              src={require(`./images/runs/${key}.jpg`)}
            />
            <div>
              <div className="title">
                <p>{months[month]} {day}, {year}</p>
                <p className="dateTimeSeparator">|</p>
                <p>{getFormattedTime(startTime)}</p>
              </div>
              <div className="runInfo">
                <div>
                  <img src={require('./images/icons/route.svg')} alt="Distance run" />
                  <div className="metric">
                    <p>{distance}</p>
                    <p>miles</p>
                  </div>
                </div>

                <div>
                  <img src={require('./images/icons/stopwatch.svg')} alt="Minutes run" />
                  <div className="metric">
                    <p>{time}</p>
                    <p>minutes</p>
                  </div>
                </div>

                <div>
                  <img src={require('./images/icons/stopwatch-pace.svg')} alt="Pace" />
                  <div className="metric">
                    <p>{pace}</p>
                    <p>mins / mile</p>
                  </div>
                </div>

                <div>
                  <img src={require('./images/icons/cupcake.svg')} alt="Calories burned" />
                  <div className="metric">
                    <p>{calories}</p>
                    <p>calories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (isOpen === false) {
      return <Redirect to="/" />;
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal"
        overlayClassName="modalOverlay"
        contentLabel="Modal"
      >
        {modalContent}
      </Modal>
    );
  }
}

export default RunModal;
