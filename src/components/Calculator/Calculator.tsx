import React, {FC, ReactElement} from 'react';
import {Equals, ModeToggler, OperatorsBlock, Screen} from '..';
import {calculatorPartT} from '../../types';
import {DigitsBlock} from '../DigitsBlock/DigitsBlock';
import s from './Calculator.module.scss';

export const Calculator = () => {
  return (
    <div className={s.layout}>
      <div className={s.empty}></div>
      <div className={s.header}>
        <ModeToggler mode={'runtime'} clickHandler={() => console.log()} />
      </div>
      <div className={s.initial}>
        <Screen value={'0'} />
        <OperatorsBlock />
        <DigitsBlock />
        <Equals clickHandler={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
      <div className={s.result}>

      </div>
    </div>
  );
};