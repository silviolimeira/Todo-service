import { Injectable } from "@angular/core";
import { StateService } from "../state/state.service";

@Injectable({
  providedIn: "root"
})
export class ActivityService {
  totalEnrolled: number;
  constructor(private stateService: StateService) {
    this.totalEnrolled = 0;
  }

  add() {
    this.totalEnrolled++;
    this.stateService.getCountersObserver().next(this.totalEnrolled);
    console.log("ActivityService, totalEnrolled: ", this.totalEnrolled);
  }

  remove() {
    if (this.totalEnrolled > 0) this.totalEnrolled--;
    this.stateService.getCountersObserver().next(this.totalEnrolled);
    console.log("ActivityService, totalEnrolled: ", this.totalEnrolled);
  }

  getTotalEnrolled() {
    return this.totalEnrolled;
  }
}
