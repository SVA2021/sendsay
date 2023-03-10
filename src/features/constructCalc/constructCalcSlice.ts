import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {calculatorPartT, CALCULATOR_PARTS, modeT} from '../../types';

export type ConstructCalcState = {
  mode: modeT
  initialConstructor: calculatorPartT[]
  resultConstructor: calculatorPartT[]
}

const initialState: ConstructCalcState = {
  mode: 'runtime',
  initialConstructor: [],
  resultConstructor: [...CALCULATOR_PARTS],
  // mode: 'constructor',
  // initialConstructor: [...CALCULATOR_PARTS],
  // resultConstructor: [],
};

export const constructCalcSlice = createSlice({
  name: 'constructCalc',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<modeT>) => {
      state.mode = action.payload;
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

export const {setMode, moveToInitial, moveToResult, } = constructCalcSlice.actions;

export const selectMode = (state: RootState) => state.constructCalc.mode;
export const selectInitialConstructor = (state: RootState) => state.constructCalc.initialConstructor;
export const selectResultConstrustor = (state: RootState) => state.constructCalc.resultConstructor;

export default constructCalcSlice.reducer;