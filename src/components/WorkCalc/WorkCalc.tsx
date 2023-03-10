import {FC} from 'react';
import {DigitsBlock, Equals, OperatorsBlock, Placeholder, Screen} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {calculate, selectOperator, selectScreen, setFirstValue, setOperator, setSecondValue} from '../../features/calculator/calculatorSlice';
import {selectResultConstrustor} from '../../features/constructCalc/constructCalcSlice';
import {digitT, operatorT} from '../../types';
import s from './WorkCalc.module.scss';

export const WorkCalc: FC = () => {

  const dispatch = useAppDispatch();
  const operator = useAppSelector(selectOperator);
  const screenValue = useAppSelector(selectScreen);
  const resultConstructor = useAppSelector(selectResultConstrustor);

  const addDigit = (v: digitT) => operator ? dispatch(setSecondValue(v)) : dispatch(setFirstValue(v));
  const addOperator = (v: operatorT) => dispatch(setOperator(v));
  const calculateToScreen = () => dispatch(calculate());

  return (
    <>
      {
        resultConstructor.length > 0
          ? resultConstructor.map((item) =>
            <div key={item} className={s.work__item}>
              {item === 'screen' && <Screen value={screenValue} />}
              {item === 'digits' && <DigitsBlock clickHandler={addDigit} />}
              {item === 'operators' && <OperatorsBlock clickHandler={addOperator} />}
              {item === 'equal' && <Equals clickHandler={calculateToScreen} />}
            </div>
          )
          : <Placeholder />
      }
    </>
  );
};