import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer'
import { MemoriesModel } from '../../../../../../api/models/memories.model';
import { MemoryApiService } from '../../memory-api.service';
import { MEMORIES_DATA_REQUEST } from '../../store/memory.action';

@Component({
  selector: 'app-memories-table',
  templateUrl: './memories-table.component.html',
  styleUrls: ['./memories-table.component.css']
})
export class MemoriesTableComponent implements OnInit {

  memories = [] as MemoriesModel[];

  constructor(private store: Store<fromApp.AppState>, private memoryApiService: MemoryApiService) {
    this.store.select(fromApp.getMemoryReducer)
      .subscribe(res => {
        if (res?.memories?.length > 0) {
          this.memories = res.memories;
        }
      }
        , error => console.error(error));
  }

  ngOnInit(): void {

  }

  public deleteMemory(id: number): void {
    this.memoryApiService.deleteMemory(id).subscribe(res => {
      console.log(res);
      console.log('Deleted');
      this.store.dispatch(MEMORIES_DATA_REQUEST());
    })
  }

}
