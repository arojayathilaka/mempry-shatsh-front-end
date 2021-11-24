import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriesComponent } from './page/memories/memories.component';
import { MemoriesTableComponent } from './components/memories-table/memories-table.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { MemoriesAddDialogComponent } from './components/memories-add-dialog/memories-add-dialog.component';
import { MemoriesUpdateDialogComponent } from './components/memories-update-dialog/memories-update-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    MemoriesComponent,
    MemoriesTableComponent,
    MemoriesAddDialogComponent,
    MemoriesUpdateDialogComponent
  ],
  exports: [
    MemoriesComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    MultiSelectModule,
  ]
})
export class MemoryModule { }
