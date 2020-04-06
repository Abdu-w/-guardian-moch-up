import React from 'react';
import HeaderLeftSide from './HeaderLeftSide';
import RightSideHeader from  './RightSideHeader';
import Nav from './Nav';
import HeadLine from './HeadLine';

//Main header 
function Header(){
    return(
      <div className='header'>
         <div className='headerLeft'>
        <HeaderLeftSide />
        <Nav />
        <HeadLine />
       </div>
       <RightSideHeader />
      </div>
    )
  }
  
  export default Header;