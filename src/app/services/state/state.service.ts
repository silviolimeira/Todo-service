import { Injectable } from "@angular/core";
import { CountersService } from "../counters/counters.service";

@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor(private countersService: CountersService) {}

  addEnrolled() {
    this.countersService.add();
    console.log(
      "CountersService - addEnrolled: ",
      this.countersService.total()
    );
  }

  decEnrolled() {
    this.countersService.dec();
    console.log(
      "CountersService - decEnrolled: ",
      this.countersService.total()
    );
  }

  totalEmrolled() {
    console.log(
      "CountersService - totalEnrolled: ",
      this.countersService.total()
    );
    return this.countersService.total();
    
  }
}
