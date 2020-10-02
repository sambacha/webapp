/* eslint-disable import/no-unresolved */
import React from 'react';
import pictogram from '../../images/carbon-pictogram-dark.png';
import style from './Pictogram.module.scss';

const Pictogram = () => (
  <div className={style.container}>
    <img className={style.pictogram} src={pictogram} alt='pictogram' />
  </div>
);

export default Pictogram;