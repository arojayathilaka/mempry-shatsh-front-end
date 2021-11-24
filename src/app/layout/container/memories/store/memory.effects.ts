import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MEMORIES_DATA_LOAD_FAIL, MEMORIES_DATA_LOADED, MEMORIES_DATA_REQUEST} from './memory.action';
import {MemoryApiService} from '../memory-api.service';


@Injectable()
export class MemoryEffects {
  memoriesList$ = createEffect(() => {
    return this.action.pipe(
      ofType(MEMORIES_DATA_REQUEST),
      switchMap(() => {
        console.log('Called from effect');
        return this.memoryApiService.getAllMemories().pipe(
          map((res) => {
            return MEMORIES_DATA_LOADED({payload: res});
          }),
          catchError(() => {
            return of(MEMORIES_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private memoryApiService: MemoryApiService,
              private action: Actions) {
  }

}
