import {FC} from 'react';
import {useDrop} from 'react-dnd';
import {CalcDropItem, DigitsBlock, Equals, OperatorsBlock, Placeholder, Screen} from '..';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {ReactComponent as LineIcon} from '../../assets/line.svg';
import {addNewToResult, delFromResult, pushToResult, selectResultConstrustor, sortResult} from '../../features/constructCalc/constructCalcSlice';
import {calculatorPartT, DndItemT, DnDItemTypes, DragItemType} from '../../types';
import s from './EditCalc.module.scss';

export const EditCalc: FC = () => {

  const dispatch = useAppDispatch();
  const resultConstructor = useAppSelector(selectResultConstrustor);

  const handleAddToResult = (part: calculatorPartT) => dispatch(pushToResult(part));
  const handleDelFromResult = (part: calculatorPartT) => dispatch(delFromResult(part));

  const movableResult = resultConstructor.filter((item) => item !== 'screen');

  const [{isOver}, drop] = useDrop(() => ({
    accept: [DnDItemTypes.initial,],
    collect: (monitor) => ({isOver: !!monitor.isOver(), }),
    drop: (item: DndItemT) => handleAddToResult(item.data),
  }))

  const handleDropToItem = (dragged: calculatorPartT, hovered: calculatorPartT, type: DragItemType) => {
    console.log(dragged, hovered, type);
    type === 'initial'
      ? dispatch(addNewToResult({dragged, hovered}))
      : dispatch(sortResult({dragged, hovered}))
  }


  return (
    <>
      {resultConstructor.length > 0
        ?
        <>
          {
            resultConstructor.includes('screen') &&
            <div className={s.edit__item} onDoubleClick={() => handleDelFromResult('screen')}>
              <Screen />
            </div>
          }
          {
            movableResult.map((item) =>
              <CalcDropItem
                key={item}
                part={item}
                handleDrop={handleDropToItem}
                handleDoubleClick={() => handleDelFromResult(item)}
              >

                {item === 'screen' && <Screen />}
                {item === 'digits' && <DigitsBlock />}
                {item === 'operators' && <OperatorsBlock />}
                {item === 'equal' && <Equals />}
              </CalcDropItem>
            )
          }
          {
            resultConstructor.length !== 4 && //empty area to keep drop
            <div ref={drop} className={s.edit__empty}>
              {isOver && <LineIcon />}
            </div>
          }
        </>
        :
        <div ref={drop} className={s.edit__empty}>
          <Placeholder isOver={isOver} />
        </div>
      }
    </>
  );
};