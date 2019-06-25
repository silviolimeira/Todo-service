import { Injectable } from "@angular/core";
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
