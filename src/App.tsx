import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './styles/Global.css';

export default function App() {
    
    return (
        <Router>
          <Routes />
        </Router>
    );
}
