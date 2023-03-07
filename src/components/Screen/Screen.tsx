import React, {FC} from 'react';
import s from './Screen.module.scss';

export type ScreenPropsT = {
  value: string
}

export const Screen : FC<ScreenPropsT> = ({value}) => {
  return (
    <div className={s.screen} > 
      {value}
    </div>
  );
};