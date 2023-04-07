import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendmsgService {
  sendMsg : Subject<string> = new Subject<string>()
  sendMsg$ : Observable<string> = this.sendMsg.asObservable();

  constructor() { }
}
