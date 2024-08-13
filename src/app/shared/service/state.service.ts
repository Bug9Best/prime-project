import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private stateReload = new Subject<boolean>();
    stateReload$ = this.stateReload.asObservable();

    setStatusRoload(stateReload: boolean) {
        this.stateReload.next(stateReload);
    }
}