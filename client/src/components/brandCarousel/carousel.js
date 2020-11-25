import React, { useState } from 'react';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';

import './carousel.css'
import { NavigateBeforeSharp } from '@material-ui/icons';

function carousel() {

  let carArr = [
    1, 
    2,
    3, 
    4, 
    5

  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100*(carArr.length-1)) : setX(x + 100);

  };
  const goRight = () => {
    x === -100*(carArr.length-1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {
        carArr.map((item,index)=>{
          return(
            <div key={index} className="slide" style={{transform:`translateX(${x}%)` }}>
              {item}
            </div>
          );
        })
      }

      <button className="sliderBtn" id="leftBtn" onClick={goLeft}>
        <NavigateBeforeSharp></NavigateBeforeSharp>
      </button>
      <button className="sliderBtn" id="rightBtn" onClick={goRight}>
        <NavigateNextSharpIcon></NavigateNextSharpIcon>
      </button>
    </div>
  );
}

export default carousel;