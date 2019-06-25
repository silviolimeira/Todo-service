import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { StateService } from "src/app/services/state/state.service";
import { Subject } from "rxjs";
import { Observer as myObserver } from "src/app/services/state/observer";
import { ActivityService } from "src/app/services/activity/activity.service";
// import { Observable, Observer, Subscription, timer, AsyncSubject } from "rxjs";
import { Observable } from "rxjs";

@Component({
  selector: "app-total-enrolleds",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./total-enrolleds.component.html",
  styleUrls: ["./total-enrolleds.component.scss"]
})
export class TotalEnrolledsComponent implements OnInit, OnDestroy {
  valor: number;
  total: Observable<number>;

  constructor(private stateService: StateService) {
    this.total = this.stateService.getCountersObservervable();
    console.log("total-enrolleds-component, constructor, total: ", this.total);
  }

  ngOnInit() {
    // this.observer = this.counterService.getObserver();
    console.log("total-enrolleds-component, ngOnInit, total: ", this.total);
  }

  ngOnDestroy() {
    // this.stateService.unsubscribe();
    //this.observer.unsubscribe();
  }
}
