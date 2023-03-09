import React, {FC} from 'react';
import s from './Equals.module.scss';

export type EqualsPropsT = {
  clickHandler?: () => void
}

export const Equals: FC<EqualsPropsT> = ({clickHandler}) => {
  return (
    <div className={s.equals} onClick={clickHandler} >
      =
    </div>
  );
};