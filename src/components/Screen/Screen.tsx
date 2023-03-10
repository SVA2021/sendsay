import classNames from 'classnames';
import {FC} from 'react';
import {normalizeNumToString} from '../../utils';
import s from './Screen.module.scss';

export type ScreenPropsT = {
  value?: number | null | 'Не определено'
}

export const Screen: FC<ScreenPropsT> = ({value}) => {

  const screenValue = normalizeNumToString(value);

  return (
    <div className={s.screen} >
      <span className={
        classNames(
          s.screen__data,
          screenValue.length > 9 ? s.screen__data__small : s.screen__data__big,
          screenValue === 'Не определено' && s.screen__data__NaN,
        )
      }
      >
        {screenValue}
      </span>
    </div>
  );
};