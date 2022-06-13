import React from 'react';
import {reviewImage1, reviewImage2, reviewImage3, reviewImage4, reviewImage5, reviewImage6, reviewImage7 } from './imports';
import './reviews.css';
import Article from '../../components/article/Article';


const Reviews = () => {
  return (
    <div className="candleStudio__reviewsCandleStudio section__padding" id="reviews">
      <div className="candleStudio__reviewsCandleStudio-heading">
      <h1 className="gradient__text3">Read our customer reviews, and be assured of our quality!</h1>
      </div>
      <div className="candleStudio__reviewsCandleStudio-container">
        <div className="candleStudio__reviewsCandleStudio-container_groupA">
          <Article imgUrl={reviewImage1} ></Article>
        </div>
        <div className="candleStudio__reviewsCandleStudio-container_groupB">
          <Article imgUrl={reviewImage2} ></Article>
          <Article imgUrl={reviewImage3} ></Article>
          <Article imgUrl={reviewImage6} ></Article>
          <Article imgUrl={reviewImage7} ></Article>
        </div>
        
        <div className="candleStudio__reviewsCandleStudio-container_groupC">
          <Article imgUrl={reviewImage4} ></Article>
          <Article imgUrl={reviewImage5} ></Article>
        </div>
      </div>
    </div>
  )
}

{/* TODO: You can add a facebook link here as well 
  for people who want to read more reviews*/}

export default Reviews;

