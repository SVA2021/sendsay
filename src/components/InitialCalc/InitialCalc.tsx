import {FC} from 'react';
import {DigitsBlock, Equals, OperatorsBlock, Screen} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {moveToResult, selectInitialConstructor, selectMode} from '../../features/constructCalc/constructCalcSlice';
import {calculatorPartT, CALCULATOR_PARTS} from '../../types';
import {CalcDragItem} from '../CalcDragItem/CalcDragItem';

export const InitialCalc: FC = () => {

  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectMode);
  const initialConstructor = useAppSelector(selectInitialConstructor);

  const addToResult = (part: calculatorPartT) => dispatch(moveToResult(part));

  if (mode === 'runtime') return <></>;

  return (
    <>
      {
        CALCULATOR_PARTS.map((item) =>
          <CalcDragItem key={item}
            isActive={initialConstructor.includes(item)}
            handleDrop={() => addToResult(item)}
          >
            {item === 'screen' && <Screen />}
            {item === 'digits' && <DigitsBlock />}
            {item === 'operators' && <OperatorsBlock />}
            {item === 'equal' && <Equals />}
          </CalcDragItem>
        )
      }
    </>
  );
};