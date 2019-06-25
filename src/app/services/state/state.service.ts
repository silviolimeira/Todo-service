import { Injectable } from "@angular/core";
import { CountersService } from "../counters/counters.service";
import { EnrolledsService } from "../enrolleds/enrolleds.service";

@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor(
    private counters: CountersService,
    private enrolleds: EnrolledsService
  ) {}

  getCountersObserver() {
    return this.counters.observer;
  }

  getCountersObservervable() {
    return this.counters.observable;
  }

  getEnrolledsObserver() {
    return this.enrolleds.observer;
  }

  getEnrolledsObservervable() {
    return this.enrolleds.observable;
  }
}
