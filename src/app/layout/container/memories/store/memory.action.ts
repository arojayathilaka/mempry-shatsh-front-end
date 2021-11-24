import {createAction, props} from '@ngrx/store';
import {MemoriesResponseModel} from '../../../../../api/models/memories.response.model';

export const MEMORIES_DATA_REQUEST = createAction('[Memory Management] MEMORIES_DATA_REQUEST');

export const MEMORIES_DATA_LOADED = createAction('[Memory Management] MEMORIES_DATA_LOADED', props<{ payload: MemoriesResponseModel[] }>());

export const MEMORIES_DATA_LOAD_FAIL = createAction('[Memory Management] MEMORIES_DATA_LOAD_FAIL');

