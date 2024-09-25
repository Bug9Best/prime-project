import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseModel } from '../base.model';

export enum TaskType {
  TASK = "TASK",
  BUG = "BUG",
  SUBTASK = "SUBTASK",
}

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface TaskModel extends BaseModel {
  id: string;
  task_name: string;
  task_type: TaskType;
  staus: TaskStatus;

  assignee_id: string;
  assignee: any;
  sprint_id: string;
  sprint: any;

  create_at: string;
  update_at: string;
}

@Injectable({ providedIn: 'root' })
export class TaskService extends BaseService<TaskModel> {
  public override path: string = "tasks";
}