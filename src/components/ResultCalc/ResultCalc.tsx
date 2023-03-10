import {FC} from 'react';
import {EditCalc, WorkCalc} from '..';
import {useAppSelector} from '../../app/hooks';
import {selectMode} from '../../features/constructCalc/constructCalcSlice';

export const ResultCalc: FC = () => {

  const mode = useAppSelector(selectMode);
  return (
    <>
      {
        mode === 'runtime'
          ? <WorkCalc />
          : <EditCalc />
      }
    </>
  );
};