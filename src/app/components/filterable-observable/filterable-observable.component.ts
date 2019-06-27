import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import {
  FilterableObservable,
  MyObservable as MyObservable2
} from "../../rxjs-core/operator/observable";
import { Observable, Observer, of } from "rxjs";
import { map, filter, tap } from "rxjs/operators";

@Component({
  selector: "app-filterable-observable",
  templateUrl: "./filterable-observable.component.html",
  styleUrls: ["./filterable-observable.component.scss"]
})
export class FilterableObservableComponent implements OnInit {
  // numbers: Array<number>;

  list: Observable<string[]>;
  sequence: Observable<any>;
  numbers: Array<number> = [];

  constructor(private cdr: ChangeDetectorRef) {
    // this.numbers = [];
    // this.sequence = new Observable(this.sequenceSubscriber);
  }

  // sequenceSubscriber(observer) {
  //   observer.next(11);
  //   observer.next(22);
  //   observer.next(33);
  //   observer.complete();
  //   return { unsubscribe() {} };
  // }

  ngOnInit() {
    // first one test
    // let stream$ = new MyObservable2(observer => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    // }).filter(x => x > 3);
    // stream$.subscribe(data => {
    //   console.log("FilterableObservable, MyObservable2 - data*: ", data);
    //   this.numbers.push(data);
    //   // this.sequence = of(this.numbers);
    // });

    // working with observer and static values
    // const staticValuesStream$ = of(1, 22, 333, 4444);
    // staticValuesStream$.subscribe(data => {
    //   console.log("staticValuesStream$, value: ", data);
    //   this.numbers.push(data);
    //   this.sequence = of(this.numbers);
    // });

    // // working with static values and observer using pipe(map and filter)
    // const staticValuesStream$ = of(1, 2, 3, 4, 5)
    //   // debuging (and possible other uses), data with tap istead old 'do'
    //   .pipe(
    //     tap(data => console.log("'do' tap data, before map(mata + 1): ", data))
    //   )
    //   .pipe(map(data => data + 1))
    //   .pipe(tap(data => console.log("'do' tap data, filter(data % 2): ", data)))
    //   .pipe(filter(data => data % 2 === 0));
    // staticValuesStream$.subscribe(data => {
    //   this.numbers.push(data);
    //   this.sequence = of(this.numbers);
    // });

    // working with static values and observable(update template component) using pipe(map and tap(next, error, complete))
    const source = of(1, 2, 3, 4, 5);
    const example = source
      .pipe(
        map(val => val + 10),
        tap({
          next: val => {
            console.log("on next", val);
          },
          error: error => {
            console.log("on error", error.message);
          },
          complete: () => console.log("on complete")
        })
      )
      .subscribe(val => {
        console.log(val),
          this.numbers.push(val),
          (this.sequence = of(this.numbers));
      });
  }
}

// Most operators in RxJS are depicted by a marble diagram on the site RxMarbles http://rxmarbles.com/

// Here's an example of a marble diagram:

// --(1)--(2)--(3)---->
// MANIPULATION
// -------(2)--------->

// RxFiddle access on http://rxfiddle.net and try this on the left, and see the marble diagram on the right

// let stream = Rx.Observable.of(1,2,3,4).
// filter(val => val > 2);

// stream.subscribe(next => {data => console.log(data)}, error=> {});
