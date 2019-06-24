import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { StateService } from "src/app/services/state/state.service";
import { Observable, Observer, Subscription, timer, AsyncSubject } from "rxjs";
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: "app-total-enrolleds",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./total-enrolleds.component.html",
  styleUrls: ["./total-enrolleds.component.scss"]
})
export class TotalEnrolledsComponent implements OnInit, OnDestroy {
  total: number;

  totalEnrolled: Observable<number>;

  ngOnInit() {
    this.totalEnrolled = this.stateService.getObservable();
  }

  // totalEnrolled = Observable.create(observer => {
  //   let counter = 0;
  //   let id = setInterval(
  //     () => observer.next(this.stateService.totalEmrolled()),
  //     10000
  //   );
  //   return function cleanFn() {
  //     clearInterval(id);
  //   };
  // });

  constructor(private stateService: StateService) {}

  ngOnDestroy() {
    // this.stateService.unsubscribe();
  }
}
