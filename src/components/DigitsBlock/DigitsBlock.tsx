import React, {FC} from 'react';
import {CalcButton} from '..';
import {DIGITS, digitT} from '../../types';
import {getDigitName} from '../../utils';
import s from './DigitsBlock.module.scss'

export type DigitsBlockPropsT = {
  clickHandler?: (v: digitT) => void
}

export const DigitsBlock: FC<DigitsBlockPropsT> = ({clickHandler}) => {
  return (
    <div className={s.digits} >
      {
        DIGITS.map((item) =>
          <CalcButton value={item} key={item} clickHandler={clickHandler} style={getDigitName(item)} />
        )
      }
    </div>
  );
};