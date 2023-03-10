import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import calculatorSlice from '../features/calculator/calculatorSlice';
import constructCalcSlice from '../features/constructCalc/constructCalcSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    constructCalc: constructCalcSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
