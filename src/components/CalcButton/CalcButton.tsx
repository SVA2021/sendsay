import {FC} from 'react';
import {digitT, operatorT} from '../../types';
import s from './CalcButton.module.scss';

export type CalcButtonPropsT = {
  clickHandler: (v: any) => void
  value: digitT | operatorT
}

export const CalcButton: FC<CalcButtonPropsT> = ({clickHandler, value}) => {
  return (
    <div onClick={clickHandler} className={s.calcButton} >
      {value}
    </div>
  );
};