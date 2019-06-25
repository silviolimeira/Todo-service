import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { StateService } from "src/app/services/state/state.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-total-enrolleds",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./total-enrolleds.component.html",
  styleUrls: ["./total-enrolleds.component.scss"]
})
export class TotalEnrolledsComponent implements OnInit, OnDestroy {
  total: Observable<number>;

  constructor(private stateService: StateService) {
    this.total = this.stateService.getCountersObservervable();
    // console.log("total-enrolleds-component, constructor, total: ", this.list);
  }

  ngOnInit() {
    // this.observer = this.counterService.getObserver();
    // console.log("total-enrolleds-component, ngOnInit, total: ", this.list);
  }

  ngOnDestroy() {
    // this.stateService.unsubscribe();
    //this.observer.unsubscribe();
  }
}
