import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseModel } from '../base.model';

export interface SprintModel extends BaseModel {
  id: string;
  sprint_name: string;
  start_date: string;
  end_date: string;
  duration: string;
  notes: string;
  project_id: string;
  project: any;
  owner_id: string;
  owner: any;
  tasks: any[];

  create_at: string;
  update_at: string;
}

@Injectable({ providedIn: 'root' })
export class SprintService extends BaseService<SprintModel> {
  public override path: string = "sprints";
}
