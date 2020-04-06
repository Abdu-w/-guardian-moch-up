import React from 'react';
import './App.css';
import HeaderLeftSide from './components/HeaderLeftSide';
import RighSideHeader from  './components/RightSideHeader';
import Nav from './components/Nav'



function App() {
  return (
    <div className="App">
      <HeaderLeftSide />
      <RighSideHeader />
      <Nav />
      
      
    </div>
  );
}

export default App;
