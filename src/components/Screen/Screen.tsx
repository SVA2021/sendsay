import {FC} from 'react';
import {useAppSelector} from '../../app/hooks';
import {selectScreen} from '../../features/calculator/calculatorSlice';
import s from './Screen.module.scss';

export const Screen: FC = () => {
  const value = useAppSelector(selectScreen);
  return (
    <div className={s.screen} >
      {value}
    </div>
  );
};