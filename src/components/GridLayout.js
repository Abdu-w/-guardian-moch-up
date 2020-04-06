import React from 'react';
import Header from './Header'
import Weather from './Weather';



function GridLayout(){
    const layout = ['1','2','3','4','5','6','7','8','9','10','11','12']
    return(
    <div className="gridContainer">
      {
        layout.map(num =>{
          if(num === '1'){
            return <div className={`grid${num}`}>
             <Header />
            </div>
          }
  
          if(num === '2'){
            return <div className={`grid${num}`}>2
             <Weather />
            </div>
          }
          return <div className={`grid${num}`} >{num}</div>
       })
      }
    </div>
    )
  }
  

  export default GridLayout;
  