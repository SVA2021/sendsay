import React from 'react';
import s from './Placeholder.module.scss'
import {ReactComponent as AddIcon} from '../../assets/add.svg';

export const Placeholder = () => {
  return (
    <div className={s.placeholder} >
      <p className={s.placeholder__icon}><AddIcon /></p>
      <p className={s.placeholder__title}>Перетащите сюда</p>
      <p className={s.placeholder__text}>любой элемент<br /> из левой панели</p>
    </div>
  );
};