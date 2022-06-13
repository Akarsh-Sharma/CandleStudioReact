import React from 'react'; 
import people from '../../assets/people.png';
import candleBg from '../../assets/candleBg.webp';
import './header.css';



const Header = () => {

  return(
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text2">
        Welcome! Get started on your candle journey with CandleStudio!
      </h1>
      <p>
        CANDLE STUDIO candles are handcrafted by our founder Manju Sharma and a team of expert candlers in her home studio located in Manila, Philippines.
        Since our first day in business, CANDLE STUDIO has been offering our customers the best selection of products at unbeatable prices. 
        Our online store has become synonymous with quality and we ensure a continuous variety of fantastic handcrafted natural soy scented candles free from pollutants, 
        toxins, and carcinogens. We offer unique limited edition and seasonal items that fit any budget. We also customize candles for weddings, baptisms, baby showers, etc... 
        Click the Shop button above and get your own scented natural soy candle today!
      </p>
      
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Join our myriad of customers today!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={candleBg} />
    </div>
  </div>
);
        };

export default Header;