import { Component, OnInit } from '@angular/core';
import { MEMORIES_DATA_REQUEST } from '../store/memory.action';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import { AddDialogSubject } from '../../../../../subjects/dialog.subject';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(MEMORIES_DATA_REQUEST());
  }

  public showDialog(): void {
    console.log('call')
    AddDialogSubject.next(true);
  }
}
