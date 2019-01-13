import React, { Component } from 'react';
import '../style/App.css';
import MainComponent from './MainComponent.jsx';

class App extends Component {
	render() {
    return (
		<div className="app">
		<MainComponent />
		</div>
	);
  }
}

export default App;