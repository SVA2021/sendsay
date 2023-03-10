import {FC} from 'react';
import {useDrop} from 'react-dnd';
import {EditCalc, Placeholder, WorkCalc} from '..';
import {useAppSelector} from '../../app/hooks';
import {selectMode, selectResultConstrustor} from '../../features/constructCalc/constructCalcSlice';
import {DnDItemTypes} from '../../types';

export const ResultCalc: FC = () => {

  const mode = useAppSelector(selectMode);
  const resultConstructor = useAppSelector(selectResultConstrustor);

  const [{isOver}, drop] = useDrop(() => ({
    accept: [DnDItemTypes.initial, DnDItemTypes.result],
    collect: (monitor) => ({isOver: !!monitor.isOver(), }),
  }))

  return (
    <div ref={drop} >
      {
        resultConstructor.length > 0
          ? mode === 'runtime'
            ? <WorkCalc constructResult={resultConstructor} />
            : <EditCalc constructResult={resultConstructor} />
          : <Placeholder isOver={isOver} />
      }
    </div>
  );
};