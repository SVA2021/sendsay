import classNames from 'classnames';
import {FC} from 'react';
import {useDrag} from 'react-dnd';
import {calculatorPartT, DndItemT, DnDItemTypes} from '../../types';
import s from './CalcDragItem.module.scss';

export type CalcDragItemProps = {
  children: any
  isActive: boolean
  part: calculatorPartT
}

export const CalcDragItem: FC<CalcDragItemProps> = ({children, isActive, part}) => {

  const [{isDragging}, drag,] = useDrag(
    () => ({
      type: DnDItemTypes.initial,
      item: {data: part, type: 'initial'} as DndItemT,
      collect: (monitor) => ({isDragging: !!monitor.isDragging(), }),
    }),
    [],
  )

  return (
    <div
      ref={isActive ? drag : null}
      className={classNames(
        s.initial__item,
        isActive ? s.initial__item__active : s.initial__item__blocked,
        isDragging && s.initial__item__isDragged,
      )}
    >
      {children}
    </div>
  );
};