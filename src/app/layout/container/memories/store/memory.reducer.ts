import * as MemoryManagement from './memory.action'
import { createReducer, on } from '@ngrx/store';
import { MemoriesResponseModel } from '../../../../../api/models/memories.response.model';

export interface State {
  memories: MemoriesResponseModel[];
}

export const initialState: State = {
  memories: [] as MemoriesResponseModel[]
}

export const memoryReducer = createReducer(
  initialState,
  on(MemoryManagement.MEMORIES_DATA_REQUEST, state => {
    return {
      ...state
    };
  }),
  on(MemoryManagement.MEMORIES_DATA_LOADED, (state, { payload }) => {
    return {
      ...state,
      memories: payload
    };
  })
)
