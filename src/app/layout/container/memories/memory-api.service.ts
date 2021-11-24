import { Injectable } from '@angular/core';
import {ApiBaseService} from '../../../../api/api.base.service';
import {Observable} from 'rxjs';
import {MemoriesModel} from '../../../../api/models/memories.model';
import {MemoriesPostModel} from '../../../../api/models/memories.post.model';
import {MemoriesResponseModel} from '../../../../api/models/memories.response.model';
import {GroupsResponseModel} from '../../../../api/models/groups.response.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryApiService {

  constructor(private apiBaseService: ApiBaseService) {

  }

  public getAllMemories(): Observable<MemoriesResponseModel[]> {
    return this.apiBaseService.GET<MemoriesResponseModel[]>(['Memories', 'MemoryGroups']);
  }

  public addMemory(memory: MemoriesPostModel): Observable<MemoriesModel[]> {
    return this.apiBaseService.POST<MemoriesModel[]>(['Memories'], memory);
  }

  public updateMemory(memory: MemoriesModel): Observable<MemoriesModel[]> {
    return this.apiBaseService.UPDATE<MemoriesModel[]>(['Memories'], memory);
  }

  public deleteMemory(id: number): Observable<any> {
    return this.apiBaseService.DELETE<any>(['Memories', `${id}`]);
  }

  public getAllGroups(): Observable<GroupsResponseModel[]> {
    return this.apiBaseService.GET<GroupsResponseModel[]>(['Groups']);
  }
}
