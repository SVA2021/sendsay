import {FC} from 'react';
import {DigitsBlock, Equals, OperatorsBlock, Screen} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {setSecondValue, setFirstValue, setOperator, calculate, selectOperator, selectScreen} from '../../features/calculator/calculatorSlice';
import {calculatorPartT, digitT, operatorT} from '../../types';
import s from './WorkCalc.module.scss';

export type WorCalcPropsT = {
  constructResult: calculatorPartT[]
}

export const WorkCalc: FC<WorCalcPropsT> = ({constructResult}) => {

  const dispatch = useAppDispatch();
  const operator = useAppSelector(selectOperator);
  const screenValue = useAppSelector(selectScreen);
  const addDigit = (v: digitT) => operator ? dispatch(setSecondValue(v)) : dispatch(setFirstValue(v));
  const addOperator = (v: operatorT) => dispatch(setOperator(v));
  const calculateToScreen = () => dispatch(calculate());

  return (
    <>
      {
        constructResult.map((item) =>
          <div key={item} className={s.work__item}>
            {item === 'screen' && <Screen value={screenValue} />}
            {item === 'digits' && <DigitsBlock clickHandler={addDigit} />}
            {item === 'operators' && <OperatorsBlock clickHandler={addOperator} />}
            {item === 'equal' && <Equals clickHandler={calculateToScreen} />}
          </div>
        )
      }
    </>
  );
};