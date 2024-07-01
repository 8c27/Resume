import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  public  bgSubject = new BehaviorSubject<string>('/assets/img/asy.jpg')
  // public  bgSubject = new BehaviorSubject<string>('')
  constructor() { }

  background$ = this.bgSubject.asObservable()

  setBackground(url: string){
    this.bgSubject.next(url)
  }
}
