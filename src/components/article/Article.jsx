import React from 'react';
import './article.css';

const Article = ({imgUrl, date, text}) => {
  return (
    <div className="candleStudio__reviews-container_article">
      <div className="candleStudio__reviews-container_article-image">
        <img src={imgUrl} alt="" />
      </div>
      {/* <div className="candleStudio__reviews-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div> */}
    </div>
  )
}

export default Article
