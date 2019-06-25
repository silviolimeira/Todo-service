import { Injectable } from "@angular/core";
// import { CountersService } from "../counters/counters.service";
// import { Observable, Observer } from "rxjs";
import { Observer as myObserver } from "./observer";
import { Subject as mySubject } from "./subject";
import { ActivityService } from "../activity/activity.service";
import { Observable } from "rxjs";
import { CountersService } from "../counters/counters.service";

@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor(private counters: CountersService) {}

  getCountersObserver() {
    return this.counters.observer;
  }

  getCountersObservervable() {
    return this.counters.observable;
  }
}
