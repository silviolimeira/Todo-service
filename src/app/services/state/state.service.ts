import { Injectable } from "@angular/core";
import { CountersService } from "../counters/counters.service";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StateService {
  observable: Observable<number>;
  observer: Observer<number>;

  constructor(private countersService: CountersService) {
    this.observable = new Observable((observer: Observer<number>) => {
      this.observer = observer;
    });
  }

  getObservable() {
    return this.observable;
    // this.observable.subscribe(this.handleData, this.handleError , this.handleComplete);
  }

  getObserver() {
    return this.observer;
  }

  // handleData(data) {
  //   console.log('Here are the usable data', data);
  //   // Insert Business logic here
  // }

  // handleComplete() {
  //   console.log('Complete');
  // }

  // handleError(error) {
  //   console.log('error:', error)
  //   return Observable.throw(error);
  // }

  addEnrolled() {
    this.countersService.add();
    this.observer.next(this.countersService.total());

    console.log(
      "CountersService - addEnrolled: ",
      this.countersService.total()
    );
  }

  decEnrolled() {
    this.countersService.dec();
    this.observer.next(this.countersService.total());
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
