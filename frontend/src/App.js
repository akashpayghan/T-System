import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import Trading from './pages/Trading';
import Education from './pages/Education';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/education" element={<Education />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;