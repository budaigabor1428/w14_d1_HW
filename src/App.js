import React, { Component } from 'react';
import ReleaseTable from './Containers/ReleaseTable.js'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <h1>Upcoming Film Releases for UK</h1>
      <ReleaseTable />
    </div>
    );
  }
}

export default App;
