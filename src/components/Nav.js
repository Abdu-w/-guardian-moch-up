import React from 'react';

//NAV
function Nav(){ 
    const  navOptions = [ 'News','Opinion','Sport','Culture','Lifestyle', 'More'] 
     return (
          <ul className='nav'>
           {
             navOptions.map(opt =>{
               return <li className='option'>{opt}</li>
             })
           }
         </ul>   
     );
     
   }

export default Nav;