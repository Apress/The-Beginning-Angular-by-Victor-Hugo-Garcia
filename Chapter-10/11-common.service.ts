import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class CommonService {

   public postAdded_Observable = new Subject();

   constructor() {

   }

   notifyPostAddition(msg: string) {     
     this.postAdded_Observable.next(msg);
   }
}
