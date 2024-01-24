export type ProjectsModel = {
  readonly id: number;
  code: string;
  name: string;

  status: ProjectStatus;
  priority: ProjectPriority;
  timeEstimate: number;
  resourceEstimate: number;

  estimateStartDate: Date;
  estimateEndDate: Date;

  startTime?: Date;
  endTime?: Date;

  remarks?: string;
};

export type ProjectPriority = 0 | 1 | 2;

export enum EnumProjectPriority {
  LOW = 0,
  NORMAL = 1,
  HIGH = 2,
}

export type ProjectStatus = 0 | 1 | 2 | 3;

export enum EnumProjectStatus {
  PENDING = 0,
  PROCESS = 1,
  RESOLVED = 2,
  CLOSED = 3,
}
