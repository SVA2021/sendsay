import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {calculatorPartT, CALCULATOR_PARTS, modeT} from '../../types';
import {addNewItemToResult, sortResultArray} from '../../utils';

export type ConstructCalcState = {
  mode: modeT
  initialConstructor: calculatorPartT[]
  resultConstructor: calculatorPartT[]
}

const initialState: ConstructCalcState = {
  // mode: 'runtime',
  // initialConstructor: [],
  // resultConstructor: [...CALCULATOR_PARTS],
  mode: 'constructor',
  initialConstructor: [...CALCULATOR_PARTS],
  resultConstructor: [],
};

export const constructCalcSlice = createSlice({
  name: 'constructCalc',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<modeT>) => {
      state.mode = action.payload;
    },
    delFromResult: (state, action: PayloadAction<calculatorPartT>) => {
      if (state.initialConstructor.includes(action.payload)) return;
      state.initialConstructor.push(action.payload);
      state.resultConstructor = state.resultConstructor.filter((v) => v !== action.payload);
    },
    pushToResult: (state, action: PayloadAction<calculatorPartT>) => {
      if (state.resultConstructor.includes(action.payload)) return;
      state.resultConstructor.push(action.payload);
      state.initialConstructor = state.initialConstructor.filter((v) => v !== action.payload);
    },
    sortResult: (state, action: PayloadAction<{dragged: calculatorPartT, hovered: calculatorPartT}>) => {
      state.resultConstructor = sortResultArray(action.payload.dragged, action.payload.hovered, state.resultConstructor);
    },
    addNewToResult: (state, action: PayloadAction<{dragged: calculatorPartT, hovered: calculatorPartT}>) => {
      state.initialConstructor = state.initialConstructor.filter((v) => v !== action.payload.dragged);
      state.resultConstructor = addNewItemToResult(action.payload.dragged, state.resultConstructor, state.resultConstructor.indexOf(action.payload.hovered), );
    },
  },
});

export const {setMode, delFromResult, pushToResult, sortResult, addNewToResult} = constructCalcSlice.actions;

export const selectMode = (state: RootState) => state.constructCalc.mode;
export const selectInitialConstructor = (state: RootState) => state.constructCalc.initialConstructor;
export const selectResultConstrustor = (state: RootState) => state.constructCalc.resultConstructor;

export default constructCalcSlice.reducer;