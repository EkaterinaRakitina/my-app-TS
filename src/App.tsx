import React from 'react';
import Albums from './components/Albums';
// import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Albums />
        {/* <Cards /> */}
      </header>
    </div>
  );
}

export default App;
