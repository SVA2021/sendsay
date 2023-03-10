import {InitialCalc, ModeToggler, ResultCalc} from '..';
import s from './Calculator.module.scss';

export const Calculator = () => {
  return (
    <div className={s.layout}>
      <div className={s.empty}></div>
      <div className={s.header}>
        <ModeToggler />
      </div>
      <div className={s.initial}>
        <InitialCalc />
      </div>
      <div className={s.result} >
        <ResultCalc />
      </div>
    </div>
  );
};