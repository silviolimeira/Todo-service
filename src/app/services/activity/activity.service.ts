import { Injectable } from "@angular/core";
import { StateService } from "../state/state.service";

@Injectable({
  providedIn: "root"
})
export class ActivityService {
  totalEnrolled: number;
  list: string[];
  constructor(private stateService: StateService) {
    this.totalEnrolled = 0;
    this.list = [];
  }

  add(user: string) {
    this.totalEnrolled++;
    this.list.push(user);
    this.stateService.getCountersObserver().next(this.totalEnrolled);
    console.log("ActivityService, totalEnrolled: ", this.totalEnrolled);
    console.log("lista: ", this.list);
  }

  remove(user: string) {
    let index = this.list.indexOf(user);
    this.list.splice(index, 1);
    if (this.totalEnrolled > 0) this.totalEnrolled--;
    this.stateService.getCountersObserver().next(this.totalEnrolled);
    console.log("ActivityService, totalEnrolled: ", this.totalEnrolled);
    console.log("lista: ", this.list);
  }

  getTotalEnrolled() {
    this.stateService.getCountersObserver().next(this.totalEnrolled);
    return this.totalEnrolled;
  }
}
