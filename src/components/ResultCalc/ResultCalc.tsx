import classNames from 'classnames';
import {FC} from 'react';
import {DigitsBlock, Equals, OperatorsBlock, Screen} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {moveToInitial, selectMode, selectResultConstrustor} from '../../features/calculator/calculatorSlice';
import {calculatorPartT, CALCULATOR_PARTS} from '../../types';
import s from './ResultCalc.module.scss';

export const ResultCalc: FC = () => {

  const mode = useAppSelector(selectMode);
  const resultConstructor = useAppSelector(selectResultConstrustor);
  const dispatch = useAppDispatch();

  const delFromResult = (part: calculatorPartT) => {
    if (mode === 'constructor') dispatch(moveToInitial(part));
  };

  return (
    <>
      <div className={s.result__item}>
        <Screen />
      </div>
      {
        CALCULATOR_PARTS.map((item) =>
          <div key={item}
            className={classNames(
              s.result__item,
              resultConstructor.includes(item) ? s.result__item__active : s.result__item__blocked,
            )}
            onDoubleClick={() => delFromResult(item)}
          >
            {item === 'digits' && <DigitsBlock />}
            {item === 'operators' && <OperatorsBlock />}
            {item === 'equal' && <Equals />}
          </div>
        )
      }
    </>
  );
};