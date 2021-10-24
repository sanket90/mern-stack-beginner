// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import FirstComp from './components/FirstComp';
// import ClassBasedComp from './components/ClassBasedComp';
// import FunctionBasedComp from './components/FunctionBasedComp';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World.!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <FirstComp></FirstComp>
      <ClassBasedComp></ClassBasedComp>
      <FunctionBasedComp></FunctionBasedComp> */}

      <ProductList></ProductList>
    </div>
  );
}

export default App;
