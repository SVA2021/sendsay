import {FC} from 'react';
import {digitT, operatorT} from '../../types';
import s from './CalcButton.module.scss';

export type CalcButtonPropsT = {
  clickHandler?: (v: any) => void
  value: digitT | operatorT
  gridAreaName?: string
}

export const CalcButton: FC<CalcButtonPropsT> = ({clickHandler, value, gridAreaName}) => {

  const handleClick = (value: digitT | operatorT) => {
    if (!clickHandler) return;
    clickHandler(value);
  }

  return (
    <div onClick={() => handleClick(value)} className={s.calcButton} style={{gridArea: gridAreaName}}>
      {value}
    </div>
  );
};