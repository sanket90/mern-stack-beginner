import './App.css';
import React from 'react';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import HomePage from './routes/Home';
import AboutPage from './routes/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Links to Pages / Routes */}
        <Link to="/home">Go To Home</Link>
        <br/>
        <Link to="/about">Go To About</Link>

        {/* THIS IS Route container */}
        <Switch>
          
          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
