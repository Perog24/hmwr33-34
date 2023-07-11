import React from 'react';
import {Outlet} from 'react-router';
import { Provider } from 'react-redux';
import Navbar from './components/Navigation';
import './App.scss';

// import the mainstore created in index file
import  mainStore   from "./store";

function App() {
  return (
    <div className="App">
      <Provider store = {mainStore}>
        <Navbar/>
        <Outlet />
      </Provider>
      

    </div>
  );
}

export default App;
