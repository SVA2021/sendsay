import classNames from 'classnames';
import {FC, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {calculatorPartT, DndItemT, DnDItemTypes, DragItemType} from '../../types';
import s from './CalcDropItem.module.scss';
import {ReactComponent as LineIcon} from '../../assets/line.svg';

export type CalcDropItemProps = {
  part: calculatorPartT
  children: any
  handleDoubleClick: () => void
  handleDrop: (part1: calculatorPartT, part2: calculatorPartT, type: DragItemType) => void
}

export const CalcDropItem: FC<CalcDropItemProps> = ({children, handleDoubleClick, handleDrop, part}) => {

  const ref = useRef<HTMLDivElement | null>(null);

  const [{isOver}, drop] = useDrop(() => ({
    accept: [DnDItemTypes.initial, DnDItemTypes.result],
    collect: (monitor) => ({isOver: !!monitor.isOver(), }),
    drop: (item: DndItemT) => handleDrop(item.data, part, item.type),
  }))

  const [{isDragging}, drag,] = useDrag(
    () => ({
      type: DnDItemTypes.result,
      item: {data: part, type: 'result'} as DndItemT,
      collect: (monitor) => ({isDragging: !!monitor.isDragging(), }),
    }),
    [],
  )

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={classNames(s.drop__item, isDragging && s.drop__item__isDrag)}
      onDoubleClick={handleDoubleClick}
    >
      {isOver && <span className={s.drop__line}><LineIcon /></span>}
      {children}
    </div>
  );
};