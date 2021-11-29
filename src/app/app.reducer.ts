import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMemoryManagement from './layout/container/memories/store/memory.reducer'

export interface AppState {
  memoryManagement: fromMemoryManagement.State
}

export const appReducer: ActionReducerMap<AppState> = {
  memoryManagement: fromMemoryManagement.memoryReducer
};

// Feature Selectors
export const getMemoryReducer = createFeatureSelector<fromMemoryManagement.State>('memoryManagement');

