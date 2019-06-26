import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import {
  FilterableObservable,
  MyObservable as MyObservable2
} from "../../rxjs-core/operator/observable";
import { Observable, Observer, of } from "rxjs";

@Component({
  selector: "app-filterable-observable",
  templateUrl: "./filterable-observable.component.html",
  styleUrls: ["./filterable-observable.component.scss"]
})
export class FilterableObservableComponent implements OnInit {
  // numbers: Array<number>;

  list: Observable<string[]>;
  sequence: Observable<any>;

  constructor(private cdr: ChangeDetectorRef) {
    // this.numbers = [];
    this.sequence = new Observable(this.sequenceSubscriber);
  }

  sequenceSubscriber(observer) {
    observer.next(11);
    observer.next(22);
    observer.next(33);
    observer.complete();
    return { unsubscribe() {} };
  }

  ngOnInit() {
    // this.numbers.push(1);
    // this.numbers.push(2);
    // this.numbers.push(3);
    // console.log("numbers: ", this.numbers);

    let stream$ = new MyObservable2(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
    }).filter(x => x > 2);
    stream$.subscribe(data =>
      console.log("FilterableObservable, MyObservable2 - data*: ", data)
    );

    this.sequence = of([111, 222, 333]);
  }
}
