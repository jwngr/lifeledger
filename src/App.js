import React, { Component } from 'react';
import './App.css';

import RunModal from './RunModal';
import MonthLedger from './MonthLedger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRunInfo: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(runInfo) {
    this.setState({
      modalRunInfo: runInfo,
    });
  }

  closeModal() {
    this.setState({
      modalRunInfo: null
    });
  }

  render() {
    let modalIsOpen = false
    if (this.state.modalRunInfo) {
      modalIsOpen = true;
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>2016 Running</h2>
        </div>

        <RunModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          runInfo={this.state.modalRunInfo}
        />

        <MonthLedger month={1} openModal={this.openModal} />
        <MonthLedger month={2} openModal={this.openModal} />
        <MonthLedger month={3} openModal={this.openModal} />
        <MonthLedger month={4} openModal={this.openModal} />
        <MonthLedger month={5} openModal={this.openModal} />
        <MonthLedger month={6} openModal={this.openModal} />
        <MonthLedger month={7} openModal={this.openModal} />
        <MonthLedger month={8} openModal={this.openModal} />
        <MonthLedger month={9} openModal={this.openModal} />
        <MonthLedger month={10} openModal={this.openModal} />
        <MonthLedger month={11} openModal={this.openModal} />
        <MonthLedger month={12} openModal={this.openModal} />
      </div>
    );
  }
}

export default App;
