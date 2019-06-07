import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

import Singup from '../signup'; 

function App() {
  return (
    <Router>
      <div>
        <header>Teste</header>
        <main className="App">
          <Route exact path="/singup" component={Singup} />
        </main>
      </div>
    </Router>
  );
}

export default App;
