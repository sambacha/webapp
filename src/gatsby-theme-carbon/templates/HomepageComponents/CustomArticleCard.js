import React from 'react';
import {customArticleCardContainer, articleCardImage} from './CustomArticleCard.module.scss';

export const CustomArticleCard = (props) => {
  const {imgSrc, title, subTitle} = props;
  return (
    <div className={customArticleCardContainer}>
      <div className={articleCardImage}>
        <img src={imgSrc} alt="article" />
      </div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};
