import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {operatorT} from '../../types';
import {addNumberToString, calculateResult} from '../../utils';
import {digitT} from "./../../types";

export type CalculatorState = {
  screen: number | null | undefined | 'Не определено'
  firstValue: string | null
  secondValue: string | null
  operator: operatorT | null
}

const initialState: CalculatorState = {
  screen: 0,
  firstValue: null,
  secondValue: null,
  operator: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setFirstValue: (state, action: PayloadAction<digitT>) => {
      state.firstValue = state.firstValue === null ? action.payload : addNumberToString(state.firstValue, action.payload);
      state.screen = +state.firstValue;
    },
    setSecondValue: (state, action: PayloadAction<digitT>) => {
      state.secondValue = state.secondValue === null ? action.payload : addNumberToString(state.secondValue, action.payload);
      state.screen = +state.secondValue;
    },
    setOperator: (state, action: PayloadAction<operatorT | null>) => {
      if (!state.firstValue && state.screen === 'Не определено') {
        state.firstValue = null;
        state.secondValue = null;
        state.operator = null;
        state.screen = 0;
      }
      if (!state.firstValue && typeof (state.screen) === 'number') {
        state.firstValue = String(state.screen);
      }
      state.operator = action.payload;
    },
    setInitial: (state) => {
      state.firstValue = null;
      state.secondValue = null;
      state.operator = null;
      state.screen = 0;
    },
    calculate: (state) => {
      if (!state.operator || !state.firstValue || !state.secondValue) return;
      state.screen = calculateResult(state.operator, state.firstValue, state.secondValue);
      state.firstValue = null;
      state.secondValue = null;
      state.operator = null;
    },
  },
});

export const {setFirstValue, setSecondValue, setOperator, setInitial, calculate, } = calculatorSlice.actions;

export const selectScreen = (state: RootState) => state.calculator.screen;
export const selectFirst = (state: RootState) => state.calculator.firstValue;
export const selectSecond = (state: RootState) => state.calculator.secondValue;
export const selectOperator = (state: RootState) => state.calculator.operator;

export default calculatorSlice.reducer;