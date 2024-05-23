import React, { useState } from 'react';

const ImageSlider =()=>{
  const [divs, setDivs] = useState([
    <div key={1}>
      <img src="image/Place Image 2 sec5.png" alt="" />
      <h1>John Doe</h1>
    </div>,
    <div key={2} className="img-sub-con">
      <img src="image/Place Image sec-5.png" alt="" />
      <div className="combine-designer">
        <h3>Jimmy Doe</h3>
        <h4>Designer</h4>
      </div>
    </div>,
    <div key={3}>
      <img src="image/Place Image 3 sec5.png" alt="" />
      <h1>John Doe</h1>
    </div>
  ]);

  const changeDivPositions = () => {
    const newDivs = [...divs];
    const temp = newDivs[0];
    newDivs[0] = newDivs[2];
    newDivs[2] = newDivs[1];
    newDivs[1] = temp;
    setDivs(newDivs);
  };

  return (
    <div className='section-5' id='team'>
      <h2>Our creative team</h2>
      <div className="main-div">
        <div className="subtri1" onClick={changeDivPositions}>
          <img src="image/sec5 tri.png" alt="" />
        </div>
        <div className="main-images">
          {divs}
        </div>
        <div className="subtri2" onClick={changeDivPositions}>
          <img src="image/sec5 tri2.png" alt="" />
        </div>
      </div>
    
    </div>
  );
}

export default ImageSlider;
