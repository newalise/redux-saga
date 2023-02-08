import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;


export default counterSlice.reducer;
