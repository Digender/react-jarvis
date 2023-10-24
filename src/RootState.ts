// src/RootState.ts
import { CounterState } from './features/counterSlice';

export interface RootState {
  counter: CounterState;
}
