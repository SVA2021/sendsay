import React, {FC} from 'react';
import {modeT, MODE_TYPES} from '../../types';
import s from './ModeToggler.module.scss';
import {ReactComponent as EyeIcon} from '../../assets/eye.svg';
import {ReactComponent as SelectorIcon} from '../../assets/selector.svg';
import classNames from 'classnames';

export type ModeTogglerProps = {
  mode: modeT
  clickHandler: (mode: modeT) => void
}

export const ModeToggler: FC<ModeTogglerProps> = ({mode, clickHandler}) => {
  return (
    <div className={s.toggler} >
      {MODE_TYPES.map((item) => {
        return (
          <div key={item}
            className={classNames(s.toggler__item, mode === item ? s.toggler__item__active : '')}
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