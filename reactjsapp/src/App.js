import './App.css';
import React from 'react';

import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './routes/Home';
import AboutPage from './routes/About';
import HotelListPage from './routes/HotelListPage';
import HotelDetailPage from './routes/HotelDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Links to Pages / Routes */}
        <Link to="/home">Go To Home</Link>
        
        <br/>
        <Link to="/about">Go To About</Link>
        <br/>
        <Link to="/hotels">Go To Hotels</Link>

        {/* THIS IS Route container */}
        <Switch>

          <Route path="/home"> <HomePage /> </Route>
          <Route path="/about"> <AboutPage /> </Route>
          <Route path="/hotels/:id"> <HotelDetailPage /> </Route>
          <Route path="/hotels"> <HotelListPage /> </Route>
          
          <Redirect exact path="/" to="/about"></Redirect>
          <Redirect path="/**" to="/about"></Redirect>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
