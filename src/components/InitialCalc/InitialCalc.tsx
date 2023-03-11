import {FC} from 'react';
import {DigitsBlock, Equals, OperatorsBlock, Screen} from '..';
import {useAppSelector} from '../../app/hooks';
import {selectInitialConstructor, selectMode} from '../../features/constructCalc/constructCalcSlice';
import {CALCULATOR_PARTS} from '../../types';
import {CalcDragItem} from '../CalcDragItem/CalcDragItem';

export const InitialCalc: FC = () => {

  const mode = useAppSelector(selectMode);
  const initialConstructor = useAppSelector(selectInitialConstructor);
  
  if (mode === 'runtime') return <></>;

  return (
    <>
      {
        CALCULATOR_PARTS.map((item) =>
          <CalcDragItem key={item}
            isActive={initialConstructor.includes(item)}
            part={item}
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