import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Albums from './components/Albums';
import Photos from './components/Photos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/albums" element={<Albums />}/>
          </Routes>
          <Routes>
            <Route path="/albums/:id/photos" element={<Photos />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Navigate replace to="/albums" />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
