import React, { Component } from 'react';

import {getImageKey, getFormattedTime} from './utils';

import months from './resources/months.json';

import Modal from 'react-modal';

import './RunModal.css';

// const customStyles = {
//   overlay: {
//     // backgroundColor: 'rgba(19, 29, 61, 0.7)',
//     backgroundColor: 'rgba(30, 70, 83, 0.7)',
//     // backgroundColor: 'rgba(243, 165, 48, 0.3)',
//   },
//   content : {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     width: '850px',
//     height: '400px',
//     marginRight: '-50%',
//     borderRadius: '2px',
//     border: '5px double #F3A530',
//     transform: 'translate(-50%, -50%)',
//     // backgroundColor: '#d5e1d8',
//     // backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23638d27' fill-opacity='0.46' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
//     // backgroundColor: '#F3A530',
//     // backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234cb2d4' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
//     // backgroundColor: '#4CB2D4',
//     // backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2330499b' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
//     // backgroundColor: '#4d6bce',
//     // backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234cb2d4' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
//     backgroundColor: '#4b6bd8',
//     backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234cb2d4' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
//   },
// };

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

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        // style={customStyles}
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
