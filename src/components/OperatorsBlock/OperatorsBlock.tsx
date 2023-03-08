import React, {FC} from 'react';
import {OPERATORS, operatorT} from '../../types';
import {getOperatorName} from '../../utils';
import {CalcButton} from '../CalcButton/CalcButton';
import s from './OperatorsBlock.module.scss';

export type OperatorsBlockPropsT = {
  clickHandler?: (v: operatorT) => void
}

export const OperatorsBlock: FC<OperatorsBlockPropsT> = ({clickHandler}) => {
  return (
    <div className={s.operators} >
      {
        OPERATORS.map((item) =>
          <CalcButton value={item} key={item} clickHandler={clickHandler} style={getOperatorName(item)} />
        )
      }
    </div>
  );
};