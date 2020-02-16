import { Injectable, Inject } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {environment} from '../../environments/environment';
export const WS_ENDPOINT = environment.wsEndpoint;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private socket$: WebSocketSubject<any>;
  dataUpdates$ = this.socket$.asObservable();
  
  constructor() {}

   public connect(): WebSocketSubject<any> {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket(WS_ENDPOINT);
    }
    return this.socket$;
  }

  closeConnection() {
    this.socket$.complete();
  }

  sendMessage(msg: any) {
     this.socket$.next(msg);
  }

}
