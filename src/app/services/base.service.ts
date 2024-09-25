import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, TapObserver } from 'rxjs';
import { BaseModel } from './base.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseModel> {
  private baseUrl = environment.apiUrl;
  path: string = '_blank';

  constructor(
    public http: HttpClient
  ) { }

  item: T | null = null;
  items: T[] | null = null;
  item$: Subject<T | null> = new Subject<T | null>();
  items$: Subject<T[] | null> = new Subject<T[] | null>();

  itemChange: Partial<TapObserver<T>> = {
    next: res => {
      this.item = res;
      this.item$.next(this.item);
    }
  }

  itemsChange: Partial<TapObserver<T[]>> = {
    next: res => {
      this.items = res;
      this.items$.next(this.items);
    }
  }

  get getBaseUrl(): string {
    return this.baseUrl;
  }

  getAll(): Observable<T[]> {
    console.log(this.getBaseUrl);
    return this.http.get<T[]>(this.getBaseUrl);
  }

  getOne(id: string): Observable<T> {
    return this.http.get<T>(`${this.getBaseUrl}/${id}`);
  }

  create(data: any): Observable<T> {
    return this.http.post<T>(this.getBaseUrl, data);
  }

  update(id: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.getBaseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.getBaseUrl}/${id}`);
  }

  deleteAll(): Observable<void[]> {
    return this.http.delete<void[]>(this.getBaseUrl);
  }
}
