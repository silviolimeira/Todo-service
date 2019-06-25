import { Enrolled } from "./enrolled";
import { StateService } from "../services/state/state.service";

export class Enrolleds {
  list: Enrolled[];

  constructor(private stateService: StateService) {
    this.list = [];
  }

  add(enrolled: Enrolled) {
    this.list.push(enrolled);
    // this.stateService.addEnrolled();
  }

  remove(enrolled: Enrolled) {
    let idx = this.list.findIndex(e => e.name === enrolled.name);
    this.list.slice(idx, 1);
    // this.stateService.decEnrolled();
  }

  total() {
    // return this.stateService.totalEmrolled();
  }
}
