import {FC} from 'react';
import {CalcButton} from '..';
import {OPERATORS, operatorT} from '../../types';
import {getOperatorName} from '../../utils';
import s from './OperatorsBlock.module.scss';

export type OperatorsBlockPropsT = {
  clickHandler?: (v: operatorT) => void
}

export const OperatorsBlock: FC<OperatorsBlockPropsT> = ({clickHandler}) => {
  return (
    <div className={s.operators} >
      {
        OPERATORS.map((item, index) =>
          <CalcButton value={item} key={index} clickHandler={clickHandler} style={getOperatorName(item)} />
        )
      }
    </div>
  );
};