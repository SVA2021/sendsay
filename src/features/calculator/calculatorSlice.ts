import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {calculatorPartT, CALCULATOR_PARTS, modeT, operatorT} from '../../types';
import {calculateResult} from '../../utils';

export type CalculatorState = {
  screen: string
  mode: modeT
  initialConstructor: calculatorPartT[]
  resultConstructor: calculatorPartT[]
  firstValue: string | null
  secondValue: string | null
  operator: operatorT | null
}

const initialState: CalculatorState = {
  screen: '0',
  mode: 'constructor',
  initialConstructor: [...CALCULATOR_PARTS],
  resultConstructor: [],
  firstValue: null,
  secondValue: null,
  operator: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setFirstValue: (state, action: PayloadAction<string>) => {
      state.firstValue = state.firstValue === null ? action.payload : state.firstValue + action.payload;
    },
    setSecondValue: (state, action: PayloadAction<string>) => {
      state.secondValue = state.secondValue === null ? action.payload : state.secondValue + action.payload;
    },
    setOperator: (state, action: PayloadAction<operatorT | null>) => {
      state.operator = action.payload;
    },
    setMode: (state, action: PayloadAction<modeT>) => {
      state.mode = action.payload;
      if (action.payload === 'constructor') {
        state.firstValue = null;
        state.secondValue = null;
        state.operator = null;
        state.screen = '0';
      }
    },
    setInitial: (state) => {
      state.firstValue = null;
      state.secondValue = null;
      state.operator = null;
      state.screen = '0';
    },
    calculate: (state) => {
      if (!state.operator || !state.firstValue || !state.secondValue || state.mode === 'constructor') return;
      state.screen = calculateResult(state.operator, state.firstValue, state.secondValue);
      state.firstValue = state.screen;
      state.secondValue = null;
      state.operator = null;
    },
    moveToInitial: (state, action: PayloadAction<calculatorPartT>) => {
      if (state.initialConstructor.includes(action.payload)) return;
      state.initialConstructor.push(action.payload);
      state.resultConstructor = state.resultConstructor.filter((v) => v !== action.payload);
    },
    moveToResult: (state, action: PayloadAction<calculatorPartT>) => {
      if (state.resultConstructor.includes(action.payload)) return;
      state.resultConstructor.push(action.payload);
      state.initialConstructor = state.initialConstructor.filter((v) => v !== action.payload);
    },
  },
});

export const {
  setFirstValue, setSecondValue, setOperator, setMode, setInitial, calculate, moveToInitial, moveToResult,
} = calculatorSlice.actions;

export const selectMode = (state: RootState) => state.calculator.mode;
export const selectScreen = (state: RootState) => state.calculator.screen;
export const selectFirst = (state: RootState) => state.calculator.firstValue;
export const selectSecond = (state: RootState) => state.calculator.secondValue;
export const selectOperator = (state: RootState) => state.calculator.operator;
export const selectInitialConstructor = (state: RootState) => state.calculator.initialConstructor;
export const selectResultConstrustor = (state: RootState) => state.calculator.resultConstructor;

export default calculatorSlice.reducer;