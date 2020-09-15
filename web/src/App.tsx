import React from 'react';

import Routes from './routes';

import './Customization/Global/reset.css';
import './Customization/Palette/index.css';
import './Customization/Typography/index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
