import {InitialCalc, ModeToggler, Placeholder, ResultCalc} from '..';
import {useAppSelector} from '../../app/hooks';
import {selectMode, selectResultConstrustor} from '../../features/calculator/calculatorSlice';
import s from './Calculator.module.scss';

export const Calculator = () => {

  const mode = useAppSelector(selectMode);
  const resultConstructor = useAppSelector(selectResultConstrustor);

  return (
    <div className={s.layout}>
      <div className={s.empty}></div>
      <div className={s.header}>
        <ModeToggler />
      </div>
      <div className={s.initial}>
        {mode === 'constructor' && <InitialCalc />}
      </div>
      <div className={s.result} >
        {
          resultConstructor.length > 0
            ? <ResultCalc />
            : <Placeholder />
        }
      </div>
    </div>
  );
};