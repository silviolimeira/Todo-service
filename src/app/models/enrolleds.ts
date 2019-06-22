import { Enrolled } from "./enrolled";

export class Enrolleds {
  list: Enrolled[];

  constructor() {
    this.list = [];
  }

  add(enrolled: Enrolled) {
    this.list.push(enrolled);
  }

  remove(enrolled: Enrolled) {
    let idx = this.list.findIndex(e => e.name === enrolled.name);
    this.list.slice(idx, 1);
  }
}
