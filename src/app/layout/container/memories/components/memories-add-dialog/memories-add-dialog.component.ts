import { Component, OnInit } from '@angular/core';
import { AddDialogSubject } from '../../../../../../subjects/dialog.subject';
import { MemoryApiService } from '../../memory-api.service';
import { GroupsResponseModel } from '../../../../../../api/models/groups.response.model';

@Component({
  selector: 'app-memories-add-dialog',
  templateUrl: './memories-add-dialog.component.html',
  styleUrls: ['./memories-add-dialog.component.css']
})
export class MemoriesAddDialogComponent implements OnInit {
  display: boolean = false;
  groups = [] as GroupsResponseModel[];
  selectedGroups = [] as GroupsResponseModel[];

  constructor(private memoryApiService: MemoryApiService) {
  }

  ngOnInit(): void {
    AddDialogSubject.subscribe(res => {
      console.log(res);
      this.display = res;
    })

    this.memoryApiService.getAllGroups().subscribe(res => {
      this.groups = res;
      console.log(res);
      console.log(this.groups)
    })
  }


}
