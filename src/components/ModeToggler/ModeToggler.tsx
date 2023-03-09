import React, {FC} from 'react';
import {modeT, MODE_TYPES} from '../../types';
import s from './ModeToggler.module.scss';
import {ReactComponent as EyeIcon} from '../../assets/eye.svg';
import {ReactComponent as SelectorIcon} from '../../assets/selector.svg';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectMode, setMode} from '../../features/calculator/calculatorSlice';

export const ModeToggler: FC = () => {

  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const clickHandler = (newMode: modeT) => dispatch(setMode(newMode));

  return (
    <div className={s.toggler} >
      {MODE_TYPES.map((item) => {
        return (
          <div key={item}
            className={classNames(s.toggler__item, mode === item && s.toggler__item__active)}
            onClick={() => clickHandler(item)}
          >
            {item === 'runtime' ? <EyeIcon /> : <SelectorIcon />}
            <span className={s.toggler__text}>{item}</span>
          </div>
        )
      }
      )}
    </div>
  );
};