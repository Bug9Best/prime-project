import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseModel } from '../base.model';
import { ProfileModel } from '../profile/profile.service';
import { Observable } from 'rxjs';

export interface AuthModel extends BaseModel {
  id: string;
  email: string;
  password: string;
  profile: ProfileModel;

  create_at: string;
  update_at: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenService extends BaseService<AuthModel> {
  public override path: string = "auth";

  SigninCredencial(data: any): Observable<any> {
    return this.http.post<any>(`${this.getBaseUrl}/${this.path}/signinCredencial`, data);
  }
}

