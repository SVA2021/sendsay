import React, {FC} from 'react';
import s from './Placeholder.module.scss'
import {ReactComponent as AddIcon} from '../../assets/add.svg';
import classNames from 'classnames';

export type PlaceholderProps = {
  isOver?: boolean
}

export const Placeholder: FC<PlaceholderProps> = ({isOver}) => {
  return (
    <div className={classNames(s.placeholder, isOver && s.placeholder__over)} >
      <p className={s.placeholder__icon}><AddIcon /></p>
      <p className={s.placeholder__title}>Перетащите сюда</p>
      <p className={s.placeholder__text}>любой элемент<br /> из левой панели</p>
    </div>
  );
};