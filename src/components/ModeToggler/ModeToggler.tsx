import classNames from 'classnames';
import {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {ReactComponent as EyeIcon} from '../../assets/eye.svg';
import {ReactComponent as SelectorIcon} from '../../assets/selector.svg';
import {selectMode, setMode} from '../../features/constructCalc/constructCalcSlice';
import {modeT, MODE_TYPES} from '../../types';
import s from './ModeToggler.module.scss';

export const ModeToggler: FC = () => {

  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectMode);
  const changeMode = (newMode: modeT) => dispatch(setMode(newMode));

  return (
    <div className={s.toggler} >
      {MODE_TYPES.map((item) =>
        <div key={item}
          className={
            classNames(
              s.toggler__item,
              mode === item && s.toggler__item__active,
            )}
          onClick={() => changeMode(item)}
        >
          {item === 'runtime' ? <EyeIcon /> : <SelectorIcon />}
          <span className={s.toggler__text}>
            {item}
          </span>
        </div>
      )
      }
    </div>
  );
};