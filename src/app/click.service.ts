import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  sumClicks = 0;
  private sum = new Subject<number>();

  constructor() { }

  addClicks() {
    this.sumClicks += 1;
    this.sum.next(this.sumClicks);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
