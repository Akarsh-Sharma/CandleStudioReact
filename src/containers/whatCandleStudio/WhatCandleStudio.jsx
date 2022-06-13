import React from 'react';
import './whatCandleStudio.css';
import candleBg from '../../assets/candleBg.webp';


const WhatCandleStudio = () => {
  return(
  <div className="candleStudio__aboutCandleStudio section__padding" id="aboutCandleStudio">
    <div className="candleStudio__aboutCandleStudio-image">
        <img src={candleBg} alt="candleBg"/>
    </div>

    <div className="candleStudio__aboutCandleStudio-content">
      <h1>OUR STORY</h1>
      <h4 className="gradient__text3">Started in 2018 as a hobby, Candle Studio has become a dream turned into a spectacular mainstream reality. 
         We create hand-poured scented candles for every occasion - and for every day.
         We are a brand that believes in 100% phthalate-free and eco-friendly products. Our fragrances are free from 
         carcinogens, reproductive toxins, and other potentially hazardous chemicals. More importantly, you don't need 
         to worry if these products are safe for your home.
         Harness the unique ability to evoke memories and emotions with our products!</h4>
      <h4 className="gradient__text3">Thank you for visiting our site and for experiencing our products. We would not be the brand we are without your support.</h4>
    </div>
    
  </div>
  )
}

export default WhatCandleStudio;