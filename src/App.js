import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
        <Missions />
      </>
    );
  }
}

export default App;
