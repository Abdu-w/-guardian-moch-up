import React from 'react';
import './App.css';
import HeaderLeftSide from './components/HeaderLeftSide';
import RighSideHeader from  './components/RightSideHeader';
import Nav from './components/Nav';
import Headline from './components/HeadLine';



function App() {
  return (
    <div className="App">
      <HeaderLeftSide />
      <RighSideHeader />
      <Nav />
      <Headline />
      
      
    </div>
  );
}

export default App;
