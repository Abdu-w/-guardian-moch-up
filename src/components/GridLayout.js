import React from 'react';
import Header from './Header'
function GridLayout(){
    // going to need 12 spot on the grid
    const layout = ['1','2','3','4','5','6','7','8','9','10','11','12']
    return(
    <div className="gridContainer">
      {
          //loop through the frid and give it a location 
        layout.map(num =>{
            if(num === '1'){
                return <div className={`grid${num}`}>
                 <Header />
                </div>
              }
      
          return <div className={`grid${num}`} >{num}</div>
       })
      }
    </div>
    )
  }
  export default GridLayout;
  