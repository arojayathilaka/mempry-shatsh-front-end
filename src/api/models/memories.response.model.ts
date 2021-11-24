
  export interface Group {
    id: number;
    name: string;
  }

  export interface MemoriesResponseModel {
    id: number;
    mdate: Date;
    title: string;
    description: string;
    groupId: number;
    group: Group;
  }


