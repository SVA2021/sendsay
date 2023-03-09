import classNames from 'classnames';
import React, {FC} from 'react';
import {DigitsBlock, Equals, OperatorsBlock, Screen} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {moveToResult, selectInitialConstructor} from '../../features/calculator/calculatorSlice';
import {calculatorPartT, CALCULATOR_PARTS} from '../../types';
import s from './InitialCalc.module.scss';

export const InitialCalc: FC = () => {

  const initialConstructor = useAppSelector(selectInitialConstructor);
  const dispatch = useAppDispatch();

  const addToResult = (part: calculatorPartT) => dispatch(moveToResult(part));

  return (
    <>
      {
        CALCULATOR_PARTS.map((item) =>
          <div key={item}
            className={classNames(
              s.initial__item,
              initialConstructor.includes(item) ? s.initial__item__active : s.initial__item__blocked,
            )}
            onDoubleClick={() => addToResult(item)}
          >
            {item === 'screen' && <Screen />}
            {item === 'digits' && <DigitsBlock />}
            {item === 'operators' && <OperatorsBlock />}
            {item === 'equal' && <Equals />}
          </div>
        )
      }
    </>
  );
};