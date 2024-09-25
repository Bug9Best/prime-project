import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseModel } from '../base.model';

export interface ProjectModel extends BaseModel {
  id: string;
  title: string;
  description: string;
  type: string;

  ownerId: string;
  owner: any;
  Sprints: any[];

  create_at: string;
  update_at: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService extends BaseService<ProjectModel> {
  public override path: string = "projects";
}
