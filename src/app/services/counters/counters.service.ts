import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CountersService {
  totalEnrolleds: number;
  constructor() {
    this.totalEnrolleds = 0;
  }

  add() {
    this.totalEnrolleds++;
  }

  dec() {
    if (this.totalEnrolleds > 0) this.totalEnrolleds--;
  }

  total() {
    return this.totalEnrolleds;
  }
}
