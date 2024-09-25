import { Injectable } from '@angular/core';
import { BaseModel } from '../base.model';
import { BaseService } from '../base.service';

export interface ProfileModel extends BaseModel {
  id: string;
  firstName: string;
  lastName: string;
  age: string;

  create_at: string;
  update_at: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService extends BaseService<ProfileModel> {
  public override path: string = "profiles";
}
