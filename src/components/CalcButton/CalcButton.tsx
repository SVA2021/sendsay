import {FC} from 'react';
import {digitT, operatorT} from '../../types';
import s from './CalcButton.module.scss';

export type CalcButtonPropsT = {
  clickHandler?: (v: any) => void
  value: digitT | operatorT
  style?: string
}

export const CalcButton: FC<CalcButtonPropsT> = ({clickHandler, value, style}) => {
  return (
    <div onClick={clickHandler} className={s.calcButton} style={{gridArea: style}}>
      {value}
    </div>
  );
};