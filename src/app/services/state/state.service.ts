import { Injectable } from "@angular/core";
// import { CountersService } from "../counters/counters.service";
// import { Observable, Observer } from "rxjs";
import { Observer as myObserver } from "./observer";
import { Subject as mySubject } from "./subject";
import { ActivityService } from "../activity/activity.service";

@Injectable({
  providedIn: "root"
})
export class StateService {
  totalSubject: mySubject;
  // totalObserver: myObserver;

  constructor() {
    this.totalSubject = new mySubject();
    // this.totalObserver = <myObserver>{
    //   update: () => {
    //     console.log("First Observer Updated");
    //   }
    // }
  }

  atachTotalObserver(observer: myObserver) {
    this.totalSubject.attach(observer);
  }

  notifyTotalObserver() {
    this.totalSubject.notify();
  }

  getTotalSubject() {
    return this.totalSubject;
  }
}
