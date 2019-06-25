import { Injectable } from "@angular/core";

import { StateService } from "../state/state.service";
import { Observer as myObserver } from "../state/observer";
import { ActivityService } from "../activity/activity.service";

@Injectable({
  providedIn: "root"
})
export class CountersService {
  observer: myObserver;
  total: number;

  constructor(
    private stateService: StateService,
    private activity: ActivityService
  ) {
    this.observer = <myObserver>{
      update: () => {
        this.total = activity.getTotalEnrolled();
        console.log("CounterService Updated, total: ", this.total);
      }
    };
    stateService.atachTotalObserver(this.observer);
  }

  getObserver() {
    return this.observer;
  }

  notify() {
    this.stateService.notifyTotalObserver();
  }
}
